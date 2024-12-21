import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class DailyRoutineFindAllService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>) { }

    public async findAll(): Promise<DailyRoutine[]> {
        return this.model.find({ relations: ['cardioExercises'] })
    }

}