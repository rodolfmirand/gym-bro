import { Body, Controller, NotFoundException, Param, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Controller('/exercise')
export class ExerciseUpdateController {

    constructor(@InjectRepository(BodyBuildingExercise) private bodybuildingModel: Repository<BodyBuildingExercise>,
        @InjectRepository(CardioExercise) private cardioModel: Repository<CardioExercise>) { }

    @Put('/bodybuilding/:id')
    public async updateBodybuilding(@Param('id') id: string, @Body() body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        const exercise = await this.bodybuildingModel.findOne({ where: { id } })
        if (!exercise)
            throw new NotFoundException('Exercise not found')
        this.bodybuildingModel.update({ id }, body)
        return this.bodybuildingModel.findOne({ where: { id } })
    }

    @Put('/cardio/:id')
    public async updateCardio(@Param('id') id: string, @Body() body: CardioExercise): Promise<CardioExercise> {
        const exercise = await this.cardioModel.findOne({ where: { id } })
        if (!exercise)
            throw new NotFoundException('Exercise not found')
        this.cardioModel.update({ id }, body)
        return this.cardioModel.findOne({ where: { id } })
    }
}