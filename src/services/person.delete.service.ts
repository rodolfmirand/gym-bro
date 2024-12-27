import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonDeleteService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async delete(person: Person): Promise<string> {
        if (await this.model.delete(person))
            return 'Person deleted successfully'
    }

}