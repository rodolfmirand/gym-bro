import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";
import { WorkoutRoutineFindByPersonIdService } from "./workoutroutine.findbypersonid.service";
import { WorkoutRoutineAddDailyRoutineService } from "./workoutroutine.adddailyroutine.service";
import { WorkoutRoutineUpdateService } from "./workoutroutine.update.service";

@Injectable()
export class DailyRoutineCreateService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>,
        private readonly workoutUpdateService: WorkoutRoutineUpdateService,
        private readonly workoutFindByPersonIdService: WorkoutRoutineFindByPersonIdService,
        private readonly workoutAddDailyRoutineService: WorkoutRoutineAddDailyRoutineService) { }

    public async create(body: DailyRoutine, id: string): Promise<DailyRoutine> {
        const workout = await this.workoutFindByPersonIdService.findByPersonId(id)
        const dailyRoutine = new DailyRoutine(body.name)
        await this.model.save(dailyRoutine)
        await this.workoutAddDailyRoutineService.add(dailyRoutine, workout)
        await this.workoutUpdateService.update(workout)
        return dailyRoutine
    }
}