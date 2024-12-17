import { Exercise } from "./abstract/exercise.abstract";
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ExerciseType } from './enum/exercisetype.enum';
import { CardioExerciseEnum } from "./enum/cardioexercise.enum";

export class CardioExercise extends Exercise {

    @PrimaryGeneratedColumn()
    private id: number
    
    @Column()
    type: ExerciseType.CARDIO

    @Column()
    cardioExercise: CardioExerciseEnum

    @Column({length: 200})
    description: string
    
    @Column({length: 50})
    equipment: string

    @Column()
    time: string

    @Column({length: 200})
    videoUrl: string
    
}