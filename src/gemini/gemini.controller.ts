import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { Restrictions } from './models/dtos/restrictions.model';

@Controller('gemini')
export class GeminiController {

    constructor(private readonly geminiService: GeminiService) { }

    @Post(':id')
    public generateText(@Param('id', new ParseUUIDPipe) id: string, @Body() restrictions: Restrictions): Promise<string> {
        return this.geminiService.generateText(id, restrictions)
    }
}
