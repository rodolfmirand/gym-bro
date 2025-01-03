import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.model";
import { DailyRoutine } from './dailyroutine.model';
import { Exclude, Expose } from "class-transformer";

@Entity()
export class WorkoutRoutine {

    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Expose()
    @ManyToMany(() => DailyRoutine)
    @JoinTable()
    dailyRoutine: DailyRoutine[]

    @Exclude()
    @OneToOne(() => Person, person => person.workoutRoutine)
    person: Person

}