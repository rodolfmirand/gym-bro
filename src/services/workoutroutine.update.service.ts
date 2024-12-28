import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class WorkoutRoutineUpdateService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>) { }

    public async update(workout: WorkoutRoutine): Promise<WorkoutRoutine> {
        return await this.model.save(workout)
    }
}