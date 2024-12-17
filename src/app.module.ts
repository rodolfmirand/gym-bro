import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseModule } from './modules/exercise.module';

@Module({
  imports: [PersonModule, ExerciseModule, TypeOrmModule.forRoot({
    "database": "./database.sql",
    "type": "sqlite",
    "synchronize": true,
    "entities": ["dist/**/*.model.js"]
  })],
})
export class AppModule { }
