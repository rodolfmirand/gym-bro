import { Exercise } from "./abstract/exercise.abstract";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CardioExerciseEnum } from "./enum/cardioexercise.enum";
import { Expose } from "class-transformer";

@Entity()
export class CardioExercise extends Exercise {

    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Expose()
    @Column()
    cardioExercise: CardioExerciseEnum

    @Expose()
    @Column({ length: 200 })
    description: string

    @Expose()
    @Column({ length: 50 })
    equipment: string
    
    @Expose()
    @Column()
    time: string

    @Expose()
    @Column()
    videoUrl: string

}