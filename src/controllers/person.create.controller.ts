import { Body, Controller, Post } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonCreateService } from "src/services/person.create.service";

@Controller('/person')
export class PersonCreateController {

    constructor(private readonly service: PersonCreateService) { }

    @Post()
    public async create(@Body() body: Person): Promise<Person> {
        return this.service.create(body)
    }
}