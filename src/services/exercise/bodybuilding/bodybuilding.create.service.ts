import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodybuildingRequestDTO } from "src/dtos/request/bodybuilding.request.dto";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class BodybuildingCreateService {

    constructor(@InjectRepository(BodyBuildingExercise) private model: Repository<BodyBuildingExercise>) { }

    public async create(body: BodybuildingRequestDTO): Promise<BodyBuildingExercise> {
        return await this.model.save(body)
    }
}