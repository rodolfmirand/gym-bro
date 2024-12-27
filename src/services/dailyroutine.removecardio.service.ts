import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRoutineFindService } from "./dailyroutine.find.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";

@Injectable()
export class DailyRoutineRemoveCardioService {

    constructor(private readonly dailyRoutineFindService: DailyRoutineFindService,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService
    ) { }

    public async remove(id: string, idCardio: string): Promise<string> {
        const dailyRoutine = await this.dailyRoutineFindService.find(id)
        const cardio = dailyRoutine.cardioExercises.find((cardio) => cardio.id == idCardio)
        if (!cardio)
            throw new NotFoundException('Cardio exercise not found in Daily routine')
        dailyRoutine.cardioExercises.splice(dailyRoutine.cardioExercises.indexOf(cardio), 1)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return 'Cardio exercise removed successfully'
    }
}