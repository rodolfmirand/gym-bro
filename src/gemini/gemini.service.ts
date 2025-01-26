import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable, ParseIntPipe } from '@nestjs/common';
import { PersonFindService } from 'src/services/person/person.find.service';
import { Restrictions } from './models/dtos/restrictions.model';

@Injectable()
export class GeminiService {

    private genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    constructor(private readonly personFindService: PersonFindService) { }

    async generateText(id: string, restrictions: Restrictions): Promise<string> {
        const person = await this.personFindService.find(id)

        const idade = 2025 - parseInt(person.birthDate.split('-')[0])
        console.log(idade)
        console.log(restrictions.dietaryRestrictions)
        const dietaryRestrictions = Array.isArray(restrictions.dietaryRestrictions)
            ? restrictions.dietaryRestrictions.join(', ')
            : 'Nenhuma';

        const objectives = Array.isArray(restrictions.objectives)
            ? restrictions.objectives.join(', ')
            : 'Nenhum';


        const prompt = `Crie uma dieta simples e equilibrada para uma pessoa com as seguintes características: 
            idade: ${idade} anos
            altura: ${person.height} cm
            peso: ${person.weight} kg
            restrições alimentares: ${dietaryRestrictions}
            objetivo: ${objectives}
            dieta: ${restrictions.diet}
            A dieta deve incluir café da manhã, almoço, jantar e dois lanches. 
            Deve ser balanceada, levando em conta a ingestão adequada de proteínas, carboidratos e gorduras saudáveis. 
            Evite alimentos ultraprocessados e inclua opções naturais e acessíveis. 
            O plano alimentar deve ser simples e fácil de seguir.`

        console.log(prompt)

        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

        return (await model.generateContent(prompt)).response.text()
    }
}
