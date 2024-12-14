import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.modules';

@Module({
  imports: [PersonModule],
})
export class AppModule {}
