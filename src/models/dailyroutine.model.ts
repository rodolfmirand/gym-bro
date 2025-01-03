import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { CardioExercise } from "./cardioexercise.model";
import { BodyBuildingExercise } from "./bodybuildingexercise.model";
import { Expose } from "class-transformer";

@Entity()
export class DailyRoutine {

    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Expose()
    @Column({ length: 10 })
    name: string

    @Expose()
    @ManyToMany(() => CardioExercise)
    @JoinTable()
    cardioExercises: CardioExercise[]

    @Expose()
    @ManyToMany(() => BodyBuildingExercise)
    @JoinTable()
    bodybuildingExercises: BodyBuildingExercise[]

}