import { Controller, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
import { PersonDeleteService } from "src/services/person/person.delete.service";

@Controller('person')
export class PersonDeleteController {

    constructor(private readonly personDeleteService: PersonDeleteService) { }

    @Delete(':id')
    public async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        return this.personDeleteService.delete(id)
    }
}