import { Injectable, NotFoundException, Body } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonFindService {
    
    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async find(id: string): Promise<Person> {
        const person = await this.model.findOne({ where: { id } })
        if (!person)
            throw new NotFoundException('Person not found')
        return person
    }
}