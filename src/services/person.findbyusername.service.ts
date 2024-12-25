import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonFindByUsernameService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async find(username: string): Promise<Person> {
        const person = await this.model.findOne({ where: { username } })
        if (!person)
            throw new NotFoundException('Person not found')
        return person
    }
}