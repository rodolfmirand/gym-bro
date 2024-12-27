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
        const bodybuilding = await this.bodybuildingFindService.find(idBodybuilding)
        dailyRoutine.bodybuildingExercises.push(bodybuilding)
        await this.dailyRoutineUpdateService.update(dailyRoutine)
        return 'Bodybuilding exercise added successfully'
    }
}