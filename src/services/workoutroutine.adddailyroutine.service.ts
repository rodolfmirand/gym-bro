import { Injectable } from "@nestjs/common";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { WorkoutRoutine } from "src/models/workoutroutine.model";

@Injectable()
export class WorkoutRoutineAddDailyRoutineService {

    public async add(dailyRoutine: DailyRoutine, workout: WorkoutRoutine) {
        try {
            workout.dailyRoutine.push(dailyRoutine)
        } catch (error) {
            throw error
        }
    }
}