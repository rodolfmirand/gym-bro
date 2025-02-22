import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { CardioExercise } from "./cardioexercise.model";
import { BodyBuildingExercise } from "./bodybuildingexercise.model";
import { Expose } from "class-transformer";

@Entity()
export class DailyRoutine {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 10 })
    name: string

    @ManyToMany(() => CardioExercise)
    @JoinTable()
    cardioExercises: CardioExercise[]

    @ManyToMany(() => BodyBuildingExercise)
    @JoinTable()
    bodybuildingExercises: BodyBuildingExercise[]

}