import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class CardioCreateService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async create(body: CardioExercise): Promise<CardioExercise> {
        return this.model.create(body)
    }
}