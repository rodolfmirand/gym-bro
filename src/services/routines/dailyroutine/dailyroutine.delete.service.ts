import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";
import { WorkoutRoutineFindService } from "../workoutroutine/workoutroutine.find.service";
import { DailyRoutineUpdateService } from "./dailyroutine.update.service";
import { GenerateLetter } from 'src/utils/generate.letter.util';

@Injectable()
export class DailyRoutineDeleteService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>,
        private readonly dailyRoutineUpdateService: DailyRoutineUpdateService,
        private readonly workoutRoutineFindService: WorkoutRoutineFindService
    ) { }

    public async delete(id: string, idPerson: string): Promise<any> {
        const result = await this.model.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Daily routine not found')
        }
        const workout = await this.workoutRoutineFindService.find(idPerson)
        const dailyRoutine = workout.dailyRoutine
        let counter = 65
        dailyRoutine.forEach((daily) => {
            if (dailyRoutine.indexOf(daily) === 0) {
                daily.name = 'A'
            } else {
                daily.name = GenerateLetter.generateNextLetter(String.fromCharCode(counter))
                counter++
            }
            this.dailyRoutineUpdateService.update(daily)
        })
        return { status: 'Daily routine deleted successfully' }
    }
}