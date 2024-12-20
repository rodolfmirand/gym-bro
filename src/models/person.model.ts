import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
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
    private birthDate: Date // TODO revisar como salvar corretamente

    @OneToOne(type => WorkoutRoutine, workoutRoutine => workoutRoutine.person)
    @JoinColumn()
    workoutRoutine: WorkoutRoutine
}