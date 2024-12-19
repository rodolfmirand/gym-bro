import { Controller, Delete, NotFoundException, Param } from "@nestjs/common";
import { PersonDeleteService } from "src/services/person.delete.service";

@Controller('/person')
export class PersonDeleteController {

    constructor(private readonly service: PersonDeleteService) { }

    @Delete('/:id')
    public async delete(@Param('id') id: string): Promise<string> {
        return this.service.delete(id)
    }
}