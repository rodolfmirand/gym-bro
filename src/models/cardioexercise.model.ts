import { Exercise } from "./abstract/exercise.abstract";
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { CardioExerciseEnum } from "./enum/cardioexercise.enum";
import { Uuid } from "src/utils/uuid.utils";

@Entity()
export class CardioExercise extends Exercise {

    @PrimaryColumn()
    id: string

    @Column()
    cardioExercise: CardioExerciseEnum

    @Column({ length: 200 })
    description: string

    @Column({ length: 50 })
    equipment: string

    @Column()
    time: string

    @Column({ length: 200 })
    videoUrl: string

    constructor(cardioExercise: CardioExerciseEnum, description: string, equipment: string, time: string, videoUrl: string) {
        super()
        this.id = Uuid.randomGenerator().getValue()
        this.cardioExercise = cardioExercise
        this.description = description
        this.equipment = equipment
        this.time = time
        this.videoUrl = videoUrl
    }
}