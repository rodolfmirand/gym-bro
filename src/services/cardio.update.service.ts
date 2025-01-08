import { Injectable, NotFoundException, Body } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CardioExercise } from 'src/models/cardioexercise.model';
import { CardioUpdateDTO } from 'src/dtos/request/cardio.update.dto';

@Injectable()
export class CardioUpdateService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async update(cardio: CardioExercise, body: CardioUpdateDTO): Promise<CardioExercise> {
        cardio = this.model.merge(cardio, body)
        return await this.model.save(body)
    }
}