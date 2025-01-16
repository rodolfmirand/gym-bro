import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class CardioDeleteService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async delete(id: string): Promise<any> {
        if (!await this.model.findOne({ where: { id } }))
            throw new NotFoundException('Cardio exercise not found')
        await this.model.delete(id)
        return { status: 'Bodybuilding exercise deleted successfully' }
    }
}