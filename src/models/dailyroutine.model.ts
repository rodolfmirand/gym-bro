import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { CardioExercise } from "./cardioexercise.model";
import { BodyBuildingExercise } from "./bodybuildingexercise.model";

@Entity()
@Unique(["name"])
export class DailyRoutine {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 10 })
    name: string

    @ManyToMany(type => CardioExercise)
    @JoinTable()
    cardioExercises: CardioExercise[]

    @ManyToMany(type => BodyBuildingExercise)
    @JoinTable()
    bodybuildingExercises: CardioExercise[]

    constructor(name: string) {
        this.name = name
    }

}