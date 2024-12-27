import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonFindService } from "src/services/person.find.service";

@Controller('/person')
export class PersonFindController {

    constructor(private readonly service: PersonFindService) { }

    @Get('/:id')
    public async find(@Param('id') id: string): Promise<Person> {
        return await this.service.find(id)
    }
}