import { Body, Controller, NotFoundException, Param, ParseUUIDPipe, Put, UseGuards } from "@nestjs/common";
import { PersonUpdateService } from "src/services/person.update.service";
import { PersonFindService } from '../services/person.find.service';
import { AuthGuard } from "src/auth/auth.guard";
import { PersonUpdateDTO } from "src/dtos/response/person.update.dto";

@Controller('person')
export class PersonUpdateController {

    constructor(private readonly personFindService: PersonFindService,
        private readonly personUpdateService: PersonUpdateService) { }

    @UseGuards(AuthGuard)
    @Put(':id')
    public async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: PersonUpdateDTO): Promise<PersonUpdateDTO> {
        if (await this.personFindService.find(id))
            return this.personUpdateService.update(body)
    }
}