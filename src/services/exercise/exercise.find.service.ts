import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class ExerciseFindService {

    constructor(@InjectRepository(CardioExercise) private cardioFindService: Repository<CardioExercise>,
        @InjectRepository(BodyBuildingExercise) private bodybuildingFindService: Repository<BodyBuildingExercise>
    ) { }

    public async find(id: string): Promise<any> {
        const bodybuilding = await this.bodybuildingFindService.findOne({ where: { id } })

        if (bodybuilding)
            return bodybuilding

        const cardio = await this.cardioFindService.findOne({ where: { id } })

        if (cardio)
            return cardio

        throw new NotFoundException('Exercise not found')
    }
}