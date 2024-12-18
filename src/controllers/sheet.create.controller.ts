import { Body, Controller, Param, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExercisesSheetModel } from "src/models/exercisesheet.model";
import { PersonModel } from "src/models/person.model";
import { Repository } from "typeorm";

@Controller('/sheet')
export class SheetCreateController {

    constructor(@InjectRepository(ExercisesSheetModel) private sheetModel: Repository<ExercisesSheetModel>,
        @InjectRepository(PersonModel) private personModel: Repository<PersonModel>) { }

    // @Post('/:id')
    // public async create(@Param('id') id: string): Promise<ExercisesSheetModel> {
    //     const person = this.personModel.findOne({ where: { id } })
    //     return await this.sheetModel.save(new ExercisesSheetModel())
    // }
}