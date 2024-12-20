import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class WorkoutRoutineFindAllService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>) { }

    public async findAll(): Promise<WorkoutRoutine[]> {
        return this.model.find({ relations: ['dailyRoutine'] })
    }
}