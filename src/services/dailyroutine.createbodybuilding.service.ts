import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";
import { BodybuildingCreateService } from "./bodybuilding.create.service";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { DailyRoutineFindService } from "./dailyroutine.find.service";
import { BodybuildingRequestDTO } from "src/dtos/request/bodybuilding.request.dto";


@Injectable()
export class DailyRoutineCreateBodybuildingService {

    constructor(private readonly bodybuildingCreateService: BodybuildingCreateService,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService,
        private readonly dailyRoutineFindService: DailyRoutineFindService) { }

    public async add(id: string, body: BodybuildingRequestDTO) {
        const dailyRoutine = await this.dailyRoutineFindService.find(id)
        if (!dailyRoutine)
            throw new NotFoundException('Daily routine not found')
        const bodybuilding = await this.bodybuildingCreateService.create(body)
        dailyRoutine.bodybuildingExercises.push(bodybuilding)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return bodybuilding
    }
}   