import { Injectable, NotFoundException, Delete } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { Repository } from "typeorm";
import { CardioExercise } from "src/models/cardioexercise.model";

@Injectable()
export class ExerciseDeleteService {

    constructor(@InjectRepository(BodyBuildingExercise) private bodybuildingModel: Repository<BodyBuildingExercise>,
        @InjectRepository(CardioExercise) private cardioModel: Repository<CardioExercise>
    ) { }

    public async delete(id: string): Promise<string> {
        if (await this.bodybuildingModel.findOne({ where: { id } })) {
            await this.bodybuildingModel.delete(id)
            return 'Bodybuilding exercise deleted successfully'
        } else if (await this.cardioModel.findOne({ where: { id } })) {
            await this.cardioModel.delete(id)
            return 'Cardio exercise deleted sucessfully'
        }
        throw new NotFoundException('No exercise with this ID was found')
    }
}