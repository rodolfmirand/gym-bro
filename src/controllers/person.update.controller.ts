import { Body, Controller, NotFoundException, Param, Put, UseGuards } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonUpdateService } from "src/services/person.update.service";
import { PersonFindService } from '../services/person.find.service';
import { AuthGuard } from "src/auth/auth.guard";

@Controller('/person')
export class PersonUpdateController {

    constructor(private readonly personFindService: PersonFindService,
        private readonly personUpdateService: PersonUpdateService) { }

    @UseGuards(AuthGuard)
    @Put('/:id')
    public async update(@Param('id') id: string, @Body() body: Person): Promise<Person> {
        if (await this.personFindService.find(id))
            return this.personUpdateService.update(body)
    }
}