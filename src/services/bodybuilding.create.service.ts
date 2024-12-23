import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class BodybuildingCreateService {

    constructor(@InjectRepository(BodyBuildingExercise) private model: Repository<BodyBuildingExercise>) { }

    public async create(body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        return this.model.save(body)
    }
}