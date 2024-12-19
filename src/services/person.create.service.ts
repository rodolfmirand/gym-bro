import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { PersonSchema } from "src/schemas/person.schema";
import { Repository } from "typeorm";

@Injectable()
export class PersonCreateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async create(body: PersonSchema): Promise<Person> {
        return await this.model.save(body)
    }
}