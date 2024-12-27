import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";
import { WorkoutRoutineUpdateService } from "./workoutroutine.update.service";
import { WorkoutRoutineFindService } from "./workoutroutine.find.service";

@Injectable()
export class DailyRoutineCreateService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>,
        private readonly workoutUpdateService: WorkoutRoutineUpdateService,
        private readonly workoutFindService: WorkoutRoutineFindService) { }

    public async create(body: DailyRoutine, id: string): Promise<DailyRoutine> {
        const workout = await this.workoutFindService.find(id)
        const dailyRoutine = new DailyRoutine(body.name)
        await this.model.save(dailyRoutine)
        await workout.dailyRoutine.push(dailyRoutine)
        await this.workoutUpdateService.update(workout)
        return dailyRoutine
    }
}