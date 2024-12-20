import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.model";
import { DailyRoutine } from './dailyroutine.model';

@Entity()
export class WorkoutRoutine {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(type => DailyRoutine)
    @JoinTable()
    dailyRoutine: DailyRoutine

    @OneToOne(type => Person, person => person.workoutRoutine)
    person: Person

}