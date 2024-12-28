import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { PersonRequestDTO } from 'src/dtos/request/person.request.dto';
import { PersonUpdateDTO } from 'src/dtos/response/person.update.dto';
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonUpdateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async update(person: Person, body: PersonUpdateDTO): Promise<PersonUpdateDTO> {
        person = this.model.merge(person, body)
        await this.model.save(person)
        return 
    }
}