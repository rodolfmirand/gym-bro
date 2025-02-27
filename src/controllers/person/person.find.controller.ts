import { Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { Person } from "src/models/person.model";
import { PersonFindService } from "src/services/person/person.find.service";

@Controller('person')
export class PersonFindController {

    constructor(private readonly service: PersonFindService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) id: string): Promise<Person> {
        try {
            return this.service.find(id)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error finding people.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}