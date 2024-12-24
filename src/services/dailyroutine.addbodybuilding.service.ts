import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRoutineFindService } from "./dailyroutine.find.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";
import { BodybuildingFindService } from "./bodybuilding.find.service";

@Injectable()
export class DailyRoutineAddBodybuildingService {

    constructor(private readonly dailyRoutineFindService: DailyRoutineFindService,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService,
        private readonly bodybuildingFindService: BodybuildingFindService
    ) { }

    public async add(id: string, idBodybuilding: string): Promise<string> {
        const dailyRoutine = await this.dailyRoutineFindService.find(id)
        if (!dailyRoutine)
            throw new NotFoundException('Daily routine not found')
        const bodybuilding = await this.bodybuildingFindService.find(idBodybuilding)
        if (!bodybuilding)
            throw new NotFoundException('Bodybuilding exercise not found')
        dailyRoutine.bodybuildingExercises.push(bodybuilding)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return 'Bodybuilding exercise added successfully'
    }
}