import { Controller, Get, NotFoundException, Param, ParseIntPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Controller('/exercise')
export class ExerciseFindController {

    constructor(@InjectRepository(BodyBuildingExercise) private bodyBuildingModel: Repository<BodyBuildingExercise>,
        @InjectRepository(CardioExercise) private cardioModel: Repository<CardioExercise>) { }

    @Get('/bodybuilding/:id')
    public async findBodybuilding(@Param('id', ParseIntPipe) id: number): Promise<BodyBuildingExercise> {
        const person = await this.bodyBuildingModel.findOne({ where: { id } });
        if (!person)
            throw new NotFoundException('Person not found');
        return person
    }

    @Get('/cardio/:id')
    public async findCardio(@Param('id', ParseIntPipe) id: number): Promise<CardioExercise> {
        const person = await this.cardioModel.findOne({ where: { id } });
        if (!person)
            throw new NotFoundException('Person not found');
        return person
    }
}