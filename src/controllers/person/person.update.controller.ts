import { Body, Controller, Param, ParseUUIDPipe, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { PersonUpdateDTO } from "src/dtos/request/person.update.dto";
import { PersonUpdateService } from "src/services/person/person.update.service";

@Controller('/person')
export class PersonUpdateController {

    constructor(private readonly personUpdateService: PersonUpdateService) { }

    @UseGuards(AuthGuard)
    @Put('/:id')
    public async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: PersonUpdateDTO): Promise<any> {
        try {
            return this.personUpdateService.update(id, body)
        } catch (error) {
            throw error
        }
    }
}