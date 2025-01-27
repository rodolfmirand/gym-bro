import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.model";
import { DailyRoutine } from './dailyroutine.model';
import { Exclude, Expose } from "class-transformer";

@Entity()
export class WorkoutRoutine {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToMany(() => DailyRoutine, { cascade: true, onDelete: 'CASCADE' })
    @JoinTable()
    dailyRoutine: DailyRoutine[]

    @OneToOne(() => Person, person => person.workoutRoutine)
    person: Person

}