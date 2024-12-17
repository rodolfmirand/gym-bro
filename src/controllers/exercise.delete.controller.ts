import { Controller, Delete, NotFoundException, Param, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Controller('/exercise')
export class ExerciseDeleteController {

    constructor(@InjectRepository(BodyBuildingExercise) private bodyBuildingModel: Repository<BodyBuildingExercise>,
        @InjectRepository(CardioExercise) private cardioModel: Repository<CardioExercise>) { }

    @Delete('/bodybuilding/:id')
    public async deleteBodybuilding(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const exercise = await this.bodyBuildingModel.findOne({ where: { id } });
        if (!exercise)
            throw new NotFoundException('Exercise not found');
        await this.bodyBuildingModel.delete({ id });
        return 'Exercise deleted successfully'
    }

    @Delete('/cardio/:id')
    public async deleteCardio(@Param('id', ParseIntPipe) id: number): Promise<string> {
        const exercise = await this.cardioModel.findOne({ where: { id } });
        if (!exercise)
            throw new NotFoundException('Exercise not found');
        await this.cardioModel.delete({ id });
        return 'Exercise deleted successfully'
    }
}