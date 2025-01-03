import { MuscleGroupEnum } from "src/models/enum/musclegroup.enum"
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from "./abstract/exercise.abstract";
import { Expose } from "class-transformer";

@Entity()
export class BodyBuildingExercise extends Exercise {

    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Expose()
    @Column({ length: 100 })
    name: string

    @Expose()
    @Column({ length: 200 })
    description: string

    @Expose()
    @Column()
    muscleGroup: MuscleGroupEnum

    @Expose()
    @Column({ length: 50 })
    equipment: string

    @Expose()
    @Column()
    sets: number

    @Expose()
    @Column()
    reps: number

    @Expose()
    @Column()
    load: number

    @Expose()
    @Column()
    rest: string

    @Expose()
    @Column()
    videoUrl: string
}