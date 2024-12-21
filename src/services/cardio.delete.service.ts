import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class CardioDeleteService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async delete(id: string): Promise<string> {
        if (!await this.model.findOne({ where: { id } }))
            throw new NotFoundException('Exercise not found')
        this.model.delete(id)
        return 'Exercise deleted successfully'
    }
}