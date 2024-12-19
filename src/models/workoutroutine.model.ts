import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BodyBuildingExercise } from "./bodybuildingexercise.model";
import { CardioExercise } from "./cardioexercise.model";
import { WorkoutRoutineStatus } from "./enum/workoutroutinestatus.enum";
import { Person } from "./person.model";
import { DailyRoutine } from './dailyroutine.model';

@Entity()
export class WorkoutRoutine {

    @PrimaryGeneratedColumn('uuid')
    private id: string

    @ManyToMany(type => DailyRoutine)
    @JoinTable()
    private dailyRoutine: DailyRoutine

    @ManyToOne(type => Person, workoutRoutine => WorkoutRoutine)
    private person: Person

    @Column()
    private status: WorkoutRoutineStatus.ACTIVE

}