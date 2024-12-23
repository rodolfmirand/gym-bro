import { Exercise } from "./abstract/exercise.abstract";
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CardioExerciseEnum } from "./enum/cardioexercise.enum";

@Entity()
export class CardioExercise extends Exercise {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    cardioExercise: CardioExerciseEnum

    @Column({ length: 200 })
    description: string

    @Column({ length: 50 })
    equipment: string

    @Column()
    time: string

    @Column()
    videoUrl: string

}