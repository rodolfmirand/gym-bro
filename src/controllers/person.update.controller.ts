import { Body, Controller, NotFoundException, Param, Put } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonUpdateService } from "src/services/person.update.service";
import { PersonFindService } from '../services/person.find.service';

@Controller('/person')
export class PersonUpdateController {

    constructor(private readonly personFindService: PersonFindService,
        private readonly personUpdateService: PersonUpdateService) { }

    @Put('/:id')
    public async update(@Param('id') id: string, @Body() body: Person): Promise<Person> {
        if (await this.personFindService.find(id))
            return this.personUpdateService.update(body)
    }
}