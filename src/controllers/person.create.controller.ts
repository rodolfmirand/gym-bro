import { Body, Controller, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PersonModel } from "src/models/person.model";
import { PersonSchema } from "src/schemas/person.schema";

@Controller('/person')
export class PersonCreateController {

    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) { }

    @Post()
    public async create(@Body() body: PersonSchema): Promise<PersonModel> {
        const personCreated = await this.model.save(body);
        return personCreated
    }
}