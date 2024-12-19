import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from 'src/models/bodybuildingexercise.model';
import { Repository } from "typeorm";

@Injectable()
export class BodybuildingFindAllService {

    constructor(@InjectRepository(BodyBuildingExercise) private model: Repository<BodyBuildingExercise>) { }

    public async findAll(): Promise<BodyBuildingExercise[]> {
        return await this.model.find()
    }
}