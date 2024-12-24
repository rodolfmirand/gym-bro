import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class DailyRoutineFindService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>) { }

    public async find(id: string): Promise<DailyRoutine> {
        return await this.model.findOne({ where: { id }, relations: ['cardioExercises', 'bodybuildingExercises'] })
    }
}