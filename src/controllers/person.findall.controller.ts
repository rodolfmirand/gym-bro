import { Controller, Get } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonFindAllService } from "src/services/person.findAll.service";

@Controller('/person')
export class PersonFindAllController {

    constructor(private readonly service: PersonFindAllService) { }

    @Get()
    public async findAll(): Promise<Person[]> {
        return this.service.findAll()
    }
}