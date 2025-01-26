import { Module } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';
import { PersonModule } from 'src/modules/person.module';

@Module({
  imports: [PersonModule],
  providers: [GeminiService],
  controllers: [GeminiController]
})
export class GeminiModule { }
