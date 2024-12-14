import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PersonModel {

    @PrimaryGeneratedColumn()
    private id: number
    
    @Column({ length: 100 })
    private name: string

    @Column({ length: 100 })
    private email: string

    @Column({ length: 16 })
    private password: string
}