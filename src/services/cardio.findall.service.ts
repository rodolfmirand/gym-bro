import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CardioExercise } from 'src/models/cardioexercise.model';
import { Repository } from "typeorm";

@Injectable()
export class CardioFindAllService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async findAll(): Promise<CardioExercise[]> {
        return await this.model.find()
    }
}