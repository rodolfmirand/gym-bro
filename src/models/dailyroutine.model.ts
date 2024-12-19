import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutRoutine } from "./workoutroutine.model";
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