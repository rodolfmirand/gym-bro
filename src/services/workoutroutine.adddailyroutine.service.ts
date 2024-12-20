import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class WorkoutRoutineAddDailyRoutineService {

    public async add(routine: DailyRoutine, workout: WorkoutRoutine) {
        try {
            workout.dailyRoutine.push(routine)
        } catch (error) {
            console.log('An error ocurred: ', error)
        }
    }
}