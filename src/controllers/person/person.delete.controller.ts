import { Controller, Delete, HttpException, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { PersonDeleteService } from "src/services/person/person.delete.service";

@Controller('person')
export class PersonDeleteController {

    constructor(private readonly personDeleteService: PersonDeleteService) { }

    @Delete(':id')
    public async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        try {
            return this.personDeleteService.delete(id)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error deleting person.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}