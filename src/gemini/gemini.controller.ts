import { Body, Controller, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { PromptDTO } from './gemini.prompt.dto';

@Controller('gemini')
export class GeminiController {

    constructor(private readonly geminiService: GeminiService) { }

    @Post()
    public generateText(@Body() prompt: PromptDTO): Promise<string> {
        return this.geminiService.generateText(prompt.message)
    }
}
