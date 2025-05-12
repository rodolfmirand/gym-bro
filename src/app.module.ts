import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseModule } from './modules/exercise.module';
import * as dotenv from 'dotenv';
import { WorkoutRoutineModule } from './modules/workoutroutine.module';
import { DailyRoutineModule } from './modules/dailyroutine.module';
import { AuthModule } from './auth/auth.module';
import { GeminiModule } from './gemini/gemini.module';

dotenv.config();

// @Module({
//   imports: [PersonModule, ExerciseModule, TypeOrmModule.forRoot({
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: parseInt(process.env.DB_PORT, 10),
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     synchronize: true,
//     entities: ["dist/**/*.model.js"],
//   })],
// })


@Module({
  imports: [GeminiModule, AuthModule, PersonModule, ExerciseModule, WorkoutRoutineModule, DailyRoutineModule, TypeOrmModule.forRoot({
    "database": "./database.sql",
    "type": "sqlite",
    "synchronize": true,
    "entities": ["dist/**/*.model.js"]
  }), GeminiModule],
})
export class AppModule { }
