import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BodyBuildingExercise } from '../models/bodybuildingexercise.model';

@Injectable()
export class BodybuildingUpdateService {

    constructor(@InjectRepository(BodyBuildingExercise) private model: Repository<BodyBuildingExercise>) { }

    public async update(id: string, body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        if (!await this.model.findOne({ where: { id } }))
            throw new NotFoundException('Exercise not found')
        return await this.model.save(body)
    }
}