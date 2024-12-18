import { Body, Controller, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from 'typeorm';

@Controller('/exercise')
export class ExerciseCreateController {

    constructor(@InjectRepository(BodyBuildingExercise) private bodyBuildingModel: Repository<BodyBuildingExercise>,
        @InjectRepository(CardioExercise) private cardioModel: Repository<CardioExercise>) { }

    @Post('/bodybuilding')
    public async createBodybuilding(@Body() body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        const exerciseCreated = await this.bodyBuildingModel.save(new BodyBuildingExercise(body.name, body.description, body.muscleGroup, body.equipment, body.sets, body.reps, body.rest, body.videoUrl))
        return exerciseCreated
    }

    @Post('/cardio')
    public async createCardio(@Body() body: CardioExercise): Promise<CardioExercise> {
        const exerciseCreated = await this.cardioModel.save(new CardioExercise(body.cardioExercise, body.description, body.equipment, body.time, body.videoUrl))
        return exerciseCreated
    }
}