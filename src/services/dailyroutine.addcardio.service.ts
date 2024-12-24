import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRoutineFindService } from "./dailyroutine.find.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";
import { CardioExercise } from "src/models/cardioexercise.model";
import { CardioFindService } from "./cardio.find.service";

@Injectable()
export class DailyRoutineAddCardioService {

    constructor(private readonly dailyroutineFindService: DailyRoutineFindService,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService,
        private readonly cardioFindService: CardioFindService
    ) { }

    public async add(id: string, idCardio: string): Promise<string> {
        const dailyRoutine = await this.dailyroutineFindService.find(id)
        if (!dailyRoutine)
            throw new NotFoundException('Daily routine not found')
        const cardio = await this.cardioFindService.find(idCardio)
        if (!cardio)
            throw new NotFoundException('Cardio exercise not found')
        dailyRoutine.cardioExercises.push(cardio)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return 'Cardio exercise added successfully'
    }
}