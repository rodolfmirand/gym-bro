import { Body, Controller, NotFoundException, Param, Put } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonUpdateService } from "src/services/person.update.service";

@Controller('/person')
export class PersonUpdateController {

    constructor(private readonly service: PersonUpdateService) { }

    @Put('/:id')
    public async update(@Param('id') id: string, @Body() body: Person): Promise<Person> {
        return this.service.update(id, body)
    }
}