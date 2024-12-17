import { Controller, Get } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Controller('/exercise')
export class ExerciseFindAllController {

    constructor(@InjectRepository(BodyBuildingExercise) private bodyBuildingModel: Repository<BodyBuildingExercise>,
        @InjectRepository(CardioExercise) private cardioModel: Repository<CardioExercise>) { }

    @Get('/bodybuilding')
    public async findAllBodybuilding(): Promise<BodyBuildingExercise[]> {
        const list = await this.bodyBuildingModel.find();
        return list
    }

    @Get('/cardio')
    public async findAllCardio(): Promise<CardioExercise[]> {
        const list = await this.cardioModel.find();
        return list
    }
}