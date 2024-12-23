import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";
import { WorkoutRoutineAddDailyRoutineService } from "./workoutroutine.adddailyroutine.service";
import { WorkoutRoutineUpdateService } from "./workoutroutine.update.service";
import { WorkoutRoutineFindService } from "./workoutroutine.find.service";

@Injectable()
export class DailyRoutineCreateService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>,
        private readonly workoutUpdateService: WorkoutRoutineUpdateService,
        private readonly workoutAddDailyRoutineService: WorkoutRoutineAddDailyRoutineService,
        private readonly workoutFindService: WorkoutRoutineFindService) { }

    public async create(body: DailyRoutine, id: string): Promise<DailyRoutine> {
        const workout = await this.workoutFindService.find(id)
        const dailyRoutine = new DailyRoutine(body.name)
        await this.model.save(dailyRoutine)
        await this.workoutAddDailyRoutineService.add(dailyRoutine, workout)
        await this.workoutUpdateService.update(workout)
        return dailyRoutine
    }
}