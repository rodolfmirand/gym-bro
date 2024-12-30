import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class CardioFindService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async find(id: string): Promise<CardioExercise> {
        const exercise = await this.model.findOne({ where: { id } })
        if (!exercise)
            throw new NotFoundException('Exercise not found')
        return exercise
    }
}