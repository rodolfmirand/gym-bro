import { Injectable, NotFoundException } from "@nestjs/common";
import { CardioExercise } from "src/models/cardioexercise.model";
import { CardioCreateService } from "./cardio.create.service";
import { DailyRoutineFindByWorkoutIdService } from "./dailyroutine.findbyworkoutid.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";


@Injectable()
export class DailyRoutineAddCardioService {

    constructor(private readonly dailyRoutineFindByWorkoutId: DailyRoutineFindByWorkoutIdService,
        private readonly cardioCreateService: CardioCreateService,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService) { }

    public async add(id: string, idDay: string, body: CardioExercise) {
        const dailyRoutine = await this.dailyRoutineFindByWorkoutId.find(id)
        const cardio = await this.cardioCreateService.create(body)
        const day = dailyRoutine.find((day) => day.id == idDay)
        if (!day)
            throw new NotFoundException('Day not found')
        day.cardioExercises.push(cardio)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return cardio
    }
}