import { Uuid } from 'src/utils/uuid.utils'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class PersonModel {

    @PrimaryColumn()
    private id: string

    @Column({ length: 100 })
    private name: string

    @Column({ length: 100 })
    private email: string

    @Column({ length: 16 })
    private password: string

    constructor() {
        this.id = Uuid.randomGenerator().getValue()
    }
}