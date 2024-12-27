import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRoutineFindService } from "./dailyroutine.find.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";

@Injectable()
export class DailyRoutineRemoveBodybuildingService {

    constructor(private readonly dailyRoutineFindService: DailyRoutineFindService,
        private readonly dailyRoutineUpdateSerice: DailyRoutineUpdateService
    ) { }

    public async delete(id: string, idBodybuilding: string): Promise<string> {
        const dailyRoutine = await this.dailyRoutineFindService.find(id)
        const bodybuilding = dailyRoutine.bodybuildingExercises.find((bodybuilding) => bodybuilding.id == idBodybuilding)
        if (!bodybuilding)
            throw new NotFoundException('Bodybuilding exercise not found')
        dailyRoutine.bodybuildingExercises.slice(dailyRoutine.bodybuildingExercises.indexOf(bodybuilding), 1)
        this.dailyRoutineUpdateSerice.update(dailyRoutine)
        return 'Bodybuilding exercise deleted successfully'
    }
}
