import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { WorkoutRoutine } from './workoutroutine.model';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class Person {

    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Expose()
    @Column({ length: 100 })
    name: string

    @Expose()
    @Column({length: 12, unique: true})
    username: string

    @Expose()
    @Column({ length: 100, unique: true })
    email: string

    @Exclude()
    @Column({ length: 16 })
    password: string

    @Expose()
    @Column()
    height: number

    @Expose()
    @Column()
    weight: number

    @Expose()
    @Column()
    birthDate: string

    @Expose()
    @OneToOne(() => WorkoutRoutine, workoutRoutine => workoutRoutine.person, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    workoutRoutine: WorkoutRoutine
}