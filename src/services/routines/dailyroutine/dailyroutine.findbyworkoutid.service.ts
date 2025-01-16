import { Injectable, NotFoundException } from "@nestjs/common";
import { WorkoutRoutineFindService } from '../workoutroutine/workoutroutine.find.service';
import { DailyRoutine } from 'src/models/dailyroutine.model';

@Injectable()
export class DailyRoutineFindByWorkoutIdService {

    constructor(private readonly workoutFindService: WorkoutRoutineFindService) { }

    public async find(id: string): Promise<DailyRoutine[]> {
        const workout = await this.workoutFindService.find(id)
        const dailyRoutine = workout.dailyRoutine
        if (!dailyRoutine)
            throw new NotFoundException('Daily routine not found')
        return dailyRoutine
    }
}