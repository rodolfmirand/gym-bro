import { Body, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Exercise } from "src/models/abstract/exercise.abstract";
import { Repository } from 'typeorm';

export class ExerciseCreateController {

    constructor(@InjectRepository(Exercise) private model: Repository<Exercise>) {}

    @Post()
    public async create(@Body() body: Exercise): Promise<Exercise> {
        const exerciseCreated = await this.model.save(body)
        return exerciseCreated
    }
}