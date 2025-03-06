import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { PersonFindService } from 'src/services/person/person.find.service';
import { Restrictions } from './models/restrictions.model';
import { GeminiResponseDTO } from './models/dtos/gemini.response.dto';

@Injectable()
export class GeminiService {

    private genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    constructor(private readonly personFindService: PersonFindService) { }

    async generateText(id: string, restrictions: Restrictions): Promise<GeminiResponseDTO> {
        const person = await this.personFindService.find(id)

        const idade = 2025 - parseInt(person.birthDate.split('-')[0])

        const dietaryRestrictions = Array.isArray(restrictions.dietaryRestrictions)
            ? restrictions.dietaryRestrictions.join(', ')
            : 'Nenhuma';

        const objectives = Array.isArray(restrictions.objectives)
            ? restrictions.objectives.join(', ')
            : 'Nenhum';


        const prompt = `Em seguida estão regras que você deve seguir para montar uma resposta no formato correto que desejo:
            - A dieta deve incluir quatro refeições completas.
            - A dieta deve ser balanceada, levando em consideração a ingestão adequada de proteínas, carboidratos e gorduras saudáveis.
            - Evite alimentos ultraprocessados e inclua opções naturais e acessíveis.
            - O plano alimentar deve ser simples e fácil de seguir.
            - No ínicio, deve ser informado quais as calorias estimadas a serem consumidas.
            - Não informe o nome da refeição, por exemplo "Café da manhã", envie apenas os alimentos.
            - Sua resposta deve ser de apenas uma linha, usando # para separar as refeições e * para separar os alimentos.
            - Exemplo de mensagem: "3500-4000 # alimento 1 (X calorias, Xg proteína, Xg carboidratos, Xg gorduras) * alimento 2 (X calorias, Xg proteína, Xg carboidratos, Xg gorduras) #  alimento 1 (X calorias, Xg proteína, Xg carboidratos, Xg gorduras) * alimento 2 (X calorias, Xg proteína, Xg carboidratos, Xg gorduras)
            
            Crie uma dieta simples e equilibrada para uma pessoa com as seguintes características: 
            idade: ${idade} anos.
            altura: ${person.height} cm.
            peso: ${person.weight} kg.
            restrições alimentares: ${dietaryRestrictions}.
            objetivo: ${objectives}.
            dieta: ${restrictions.diet}.
            `

        const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
        const response = (await model.generateContent(prompt)).response.text()

        const meals = response.split('#').map(part => part.trim())

        const geminiResponse = new GeminiResponseDTO()

        geminiResponse.estimatedCalories = meals[0]
        geminiResponse.firstMeal = meals[1]
        geminiResponse.secondMeal = meals[2]
        geminiResponse.thirdMeal = meals[3]
        geminiResponse.fourthMeal = meals[4]

        return geminiResponse
    }
}
