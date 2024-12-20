import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CardioExercise } from "./cardioexercise.model";
import { BodyBuildingExercise } from "./bodybuildingexercise.model";

@Entity()
export class DailyRoutine {
    
    @PrimaryGeneratedColumn('uuid')
    private id: string

    @ManyToMany(type => CardioExercise)
    @JoinTable()
    private cardioExercises: CardioExercise

    @ManyToMany(type => BodyBuildingExercise)
    @JoinTable()
    private bodybuildingExercises: CardioExercise

}