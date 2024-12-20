import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { WorkoutRoutine } from './workoutroutine.model';

@Entity()
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    private name: string

    @Column({ length: 100 })
    private email: string

    @Column({ length: 16 })
    private password: string

    @Column()
    private height: number

    @Column()
    private weight: number

    @Column()
    private birthDate: Date

    @OneToMany(type => Person, workoutRoutine => WorkoutRoutine)
    private WorkoutRoutine: WorkoutRoutine[]

    public setWorkoutRoutine(workoutRoutine: WorkoutRoutine): void {
        this.WorkoutRoutine.push(workoutRoutine)
    }
}