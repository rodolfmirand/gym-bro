import { Body, Controller, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PersonModel } from "src/models/person.model";

@Controller('/person')
export class PersonCreateController {

    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) { }

    @Post()
    public create(@Body() body: PersonSchema): any {
        return {
            data: ''
        }
    }
}