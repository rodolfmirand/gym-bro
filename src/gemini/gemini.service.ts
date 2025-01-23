import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {

    private genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

    async generateText(prompt: string): Promise<string> {
        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

        return (await model.generateContent(prompt)).response.text()
    }
}
