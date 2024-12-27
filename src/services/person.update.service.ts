import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { PersonUpdateDTO } from 'src/dtos/response/person.update.dto';
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonUpdateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async update(person: PersonUpdateDTO): Promise<PersonUpdateDTO> {
        return this.model.save(person)
    }
}