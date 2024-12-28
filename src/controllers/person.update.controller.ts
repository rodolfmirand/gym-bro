import { Body, Controller, NotFoundException, Param, ParseUUIDPipe, Put, UseGuards } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonUpdateService } from "src/services/person.update.service";
import { PersonFindService } from '../services/person.find.service';
import { AuthGuard } from "src/auth/auth.guard";
import { PersonRequestDTO } from "src/dtos/request/person.request.dto";
import { PersonUpdateDTO } from "src/dtos/response/person.update.dto";

@Controller('/person')
export class PersonUpdateController {

    constructor(private readonly personFindService: PersonFindService,
        private readonly personUpdateService: PersonUpdateService) { }

    @UseGuards(AuthGuard)
    @Put('/:id')
    public async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: PersonUpdateDTO): Promise<string> {
        const person = await this.personFindService.find(id)
        return this.personUpdateService.update(person, body)
    }
}