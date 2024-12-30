import { Injectable, NotFoundException } from "@nestjs/common";
import { CardioExercise } from "src/models/cardioexercise.model";
import { CardioCreateService } from "./cardio.create.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";
import { DailyRoutineFindService } from "./dailyroutine.find.service";
import { CardioRequestDTO } from "src/dtos/request/cardio.request.dto";


@Injectable()
export class DailyRoutineCreateCardioService {

    constructor(private readonly cardioCreateService: CardioCreateService,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService,
        private readonly dailyRoutineFindService: DailyRoutineFindService) { }

    public async add(id: string, body: CardioRequestDTO) {
        const dailyRoutine = await this.dailyRoutineFindService.find(id)
        const cardio = await this.cardioCreateService.create(body)
        dailyRoutine.cardioExercises.push(cardio)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return cardio
    }
}