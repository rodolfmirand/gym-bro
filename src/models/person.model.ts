import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { WorkoutRoutine } from './workoutroutine.model';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 100 })
    name: string
    
    @Column({length: 12, unique: true})
    username: string

    @Column({ length: 100, unique: true })
    email: string

    @Exclude()
    @Column()
    password: string

    @Column()
    height: number

    @Column()
    weight: number

    @Column()
    birthDate: string

    @OneToOne(() => WorkoutRoutine, workoutRoutine => workoutRoutine.person, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    workoutRoutine: WorkoutRoutine
}