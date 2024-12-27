import { MuscleGroupEnum } from "src/models/enum/musclegroup.enum"
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from "./abstract/exercise.abstract";

@Entity()
export class BodyBuildingExercise extends Exercise {

    @PrimaryGeneratedColumn('uuid')
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
    load: number

    @Column()
    rest: string

    @Column()
    videoUrl: string
}