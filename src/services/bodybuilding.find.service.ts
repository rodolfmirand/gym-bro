import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class BodybuildingFindService {

    constructor(@InjectRepository(BodyBuildingExercise) private model: Repository<BodyBuildingExercise>) { }

    public async find(id: string): Promise<BodyBuildingExercise> {
        const exercise = this.model.findOne({ where: { id } })
        if (!exercise)
            throw new NotFoundException('Exercise not found')
        return exercise
    }
}