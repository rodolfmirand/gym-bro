import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { PersonUpdateDTO } from 'src/dtos/request/person.update.dto';
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";
import { PersonFindService } from './person.find.service';

@Injectable()
export class PersonUpdateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>,
        private readonly personFindService: PersonFindService
    ) { }

    public async update(id: string, body: PersonUpdateDTO): Promise<any> {
        let person = await this.personFindService.find(id)
        person = this.model.merge(person, body)
        await this.model.save(person)
        return { status: 'Person updated successfully' }
    }
}