import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";
import { WorkoutRoutineFindByPersonIdService } from "./workoutroutine.findbypersonid.service";

@Injectable()
export class WorkoutRoutineUpdateService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>,
        private readonly workoutFindByPersonIdService: WorkoutRoutineFindByPersonIdService) { }

    public async update(id: string, workout: WorkoutRoutine): Promise<WorkoutRoutine> {
        if (this.workoutFindByPersonIdService.findByPersonId(id))
            return this.model.save(workout)
    }
}