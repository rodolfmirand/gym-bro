import { Controller, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonModel } from "src/models/person.model";
import { Repository } from "typeorm";

@Controller('/person')
export class PersonFindAllController {

    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) { }

    @Get()
    public async findAll(): Promise<{data: PersonModel[]}> {
        const list = await this.model.find();
        return {
            data: list
        }
    }
}