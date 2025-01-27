import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CardioExerciseEnum } from "./enum/cardioexercise.enum";
import { Expose } from "class-transformer";

@Entity()
export class CardioExercise {

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