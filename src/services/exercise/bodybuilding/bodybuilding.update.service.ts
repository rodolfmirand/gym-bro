import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BodyBuildingExercise } from '../../../models/bodybuildingexercise.model';
import { BodybuildingRequestDTO } from 'src/dtos/request/bodybuilding.request.dto';
import { BodybuildingUpdateDTO } from 'src/dtos/request/bodybuilding.update.dto';

@Injectable()
export class BodybuildingUpdateService {

    constructor(@InjectRepository(BodyBuildingExercise) private model: Repository<BodyBuildingExercise>) { }

    public async update(bodybuilding: BodyBuildingExercise, body: BodybuildingUpdateDTO): Promise<BodyBuildingExercise> {
        bodybuilding = this.model.merge(bodybuilding, body)
        return await this.model.save(bodybuilding)
    }
}