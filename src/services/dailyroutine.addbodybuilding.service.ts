import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRoutineFindByWorkoutIdService } from "./dailyroutine.findbyworkoutid.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";
import { BodybuildingCreateService } from "./bodybuilding.create.service";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";


@Injectable()
export class DailyRoutineAddBodybuildingService {

    constructor(private readonly dailyRoutineFindByWorkoutId: DailyRoutineFindByWorkoutIdService,
        private readonly bodybuildingCreateService: BodybuildingCreateService,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService) { }

    public async add(id: string, idDay: string, body: BodyBuildingExercise) {
        const dailyRoutine = await this.dailyRoutineFindByWorkoutId.find(id)
        const bodybuilding = await this.bodybuildingCreateService.create(body)
        const day = dailyRoutine.find((day) => day.id == idDay)
        if (!day)
            throw new NotFoundException('Day not found')
        day.bodybuildingExercises.push(bodybuilding)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return bodybuilding
    }
}