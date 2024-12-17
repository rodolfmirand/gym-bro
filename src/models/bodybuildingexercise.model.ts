import { MuscleGroupEnum } from "src/models/enum/musclegroup.enum"
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from "./abstract/exercise.abstract";
import { ExerciseType } from "./enum/exercisetype.enum";

@Entity()
export class BodyBuildingExercise extends Exercise {

    @PrimaryGeneratedColumn()
    private id: number

    @Column({ length: 100 })
    name: string

    @Column({ length: 200 })
    description: string

    @Column()
    type: ExerciseType.BODYBUILDING

    @Column()
    muscleGroup: MuscleGroupEnum

    @Column({ length: 50 })
    equipment: string

    @Column()
    sets: number

    @Column()
    reps: number

    @Column()
    rest: number

    @Column({ length: 200 })
    videoUrl: string
}