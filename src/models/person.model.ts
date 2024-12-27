import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { WorkoutRoutine } from './workoutroutine.model';

@Entity()
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    name: string

    @Column({length: 12, unique: true})
    username: string

    @Column({ length: 100, unique: true})
    email: string

    @Column({ length: 16 })
    password: string

    @Column()
    height: number

    @Column()
    weight: number

    @Column()
    birthDate: string

    @OneToOne(() => WorkoutRoutine, workoutRoutine => workoutRoutine.person)
    @JoinColumn()
    workoutRoutine: WorkoutRoutine
}