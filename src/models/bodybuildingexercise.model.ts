import { MuscleGroupEnum } from "src/models/enum/musclegroup.enum"
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Exercise } from "./abstract/exercise.abstract";
import { Uuid } from "src/utils/uuid.utils";

@Entity()
export class BodyBuildingExercise extends Exercise {

    @PrimaryColumn()
    id: string

    @Column({ length: 100 })
    name: string

    @Column({ length: 200 })
    description: string

    @Column()
    muscleGroup: MuscleGroupEnum

    @Column({ length: 50 })
    equipment: string

    @Column()
    sets: number

    @Column()
    reps: number

    @Column()
    rest: string

    @Column({ length: 200 })
    videoUrl: string

    constructor(name: string, description: string, muscleGroup: MuscleGroupEnum, equipment: string, sets: number, reps: number, rest: string, videoUrl: string) {
        super()
        this.id = Uuid.randomGenerator().getValue()
        this.name = name
        this.description = description
        this.muscleGroup = muscleGroup
        this.equipment = equipment
        this.sets = sets
        this.reps = reps
        this.rest = rest
        this.videoUrl = videoUrl
    }
}