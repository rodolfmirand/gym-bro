import { Body, Controller, NotFoundException, Param, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PersonModel } from "src/models/person.model";
import { PersonSchema } from "src/schemas/person.schema";
import { Repository } from "typeorm";

@Controller('/person')
export class PersonUpdateController {

    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) { }

    @Put('/:id')
    public async update(@Param('id') id: string, @Body() body: PersonSchema): Promise<PersonModel> {
        const person = await this.model.findOne({ where: { id } });
        if (!person)
            throw new NotFoundException('Person not found');
        await this.model.update({ id }, body);
        return await this.model.findOne({ where: { id } })
    }
}