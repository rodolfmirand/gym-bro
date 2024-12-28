import { Controller, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
import { PersonDeleteService } from "src/services/person.delete.service";
import { PersonFindService } from '../services/person.find.service';

@Controller('person')
export class PersonDeleteController {

    constructor(private readonly personFindService: PersonFindService,
        private readonly personDeleteService: PersonDeleteService) { }
    
    @Delete(':id')
    public async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<string> {
        const person = await this.personFindService.find(id)
        return this.personDeleteService.delete(person)
    }
}