import { Injectable, NotFoundException, Body } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CardioExercise } from 'src/models/cardioexercise.model';

@Injectable()
export class CardioUpdateService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async update(id: string, body: CardioExercise): Promise<CardioExercise> {
        if (!await this.model.findOne({ where: { id } }))
            throw new NotFoundException('Exercise not found')
        return this.model.save(body)
    }
}