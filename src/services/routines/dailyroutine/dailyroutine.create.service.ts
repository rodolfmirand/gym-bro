import { Injectable, MethodNotAllowedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";
import { WorkoutRoutineUpdateService } from "../workoutroutine/workoutroutine.update.service";
import { GenerateLetter } from "src/utils/generate.letter.util";
import { WorkoutRoutineFindService } from "../workoutroutine/workoutroutine.find.service";

@Injectable()
export class DailyRoutineCreateService {

    private letter: string = 'A'

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>,
        private readonly workoutUpdateService: WorkoutRoutineUpdateService,
        private readonly workoutFindService: WorkoutRoutineFindService,
    ) { }

    public async create(idPerson: string): Promise<DailyRoutine> {
        const workout = await this.workoutFindService.find(idPerson)
        const dailyRoutine = new DailyRoutine()
        const length = workout.dailyRoutine.length

        if (length === 7)
            throw new MethodNotAllowedException('It is not possible to create more daily routine')

        if (length === 0)
            dailyRoutine.name = this.letter
        else
            dailyRoutine.name = GenerateLetter.generateNextLetter(workout.dailyRoutine[length - 1].name)

        await this.model.save(dailyRoutine)
        workout.dailyRoutine.push(dailyRoutine)
        await this.workoutUpdateService.update(workout)
        return dailyRoutine
    }
}