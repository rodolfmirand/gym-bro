import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { Restrictions } from './models/restrictions.model';
import { GeminiResponseDTO } from './models/dtos/gemini.response.dto';

@Controller('gemini')
export class GeminiController {

    constructor(private readonly geminiService: GeminiService) { }

    @Post(':id')
    public async generateText(@Param('id', new ParseUUIDPipe) id: string, @Body() restrictions: Restrictions): Promise<GeminiResponseDTO> {
        return this.geminiService.generateText(id, restrictions)
    }
}
