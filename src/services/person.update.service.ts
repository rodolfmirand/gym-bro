import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { PersonSchema } from "src/schemas/person.schema";
import { Repository } from "typeorm";

@Injectable()
export class PersonUpdateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async update(id: string, body: PersonSchema): Promise<Person> {
        if (!await this.model.findOne({ where: { id } }))
            throw new NotFoundException('Person not found')
        return this.model.save(body)
    }
}