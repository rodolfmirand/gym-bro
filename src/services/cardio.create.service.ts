import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CardioRequestDTO } from "src/dtos/request/cardio.request.dto";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class CardioCreateService {

    constructor(@InjectRepository(CardioExercise) private model: Repository<CardioExercise>) { }

    public async create(body: CardioRequestDTO): Promise<CardioExercise> {
        return await this.model.save(body)
    }
}