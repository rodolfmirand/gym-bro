import { Controller, Delete, NotFoundException, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonModel } from "src/models/person.model";
import { Repository } from "typeorm";

@Controller('/person')
export class PersonDeleteController {

    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) { }

    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<string> {
        const person = await this.model.findOne({ where: { id } });
        if (!person)
            throw new NotFoundException('Person not found');

        await this.model.delete({ id });
        return 'Person deleted successfully'
    }
}