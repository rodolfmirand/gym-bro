import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";
import { PersonUpdateService } from "./person.update.service";
import { Person } from "src/models/person.model";
import { DailyRoutineCreateService } from "./dailyroutine.create.service";
import { DailyRoutine } from "src/models/dailyroutine.model";

@Injectable()
export class WorkoutRoutineCreateService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>,
        private readonly personUpdateService: PersonUpdateService,
        private readonly dailyRoutineCreateService: DailyRoutineCreateService) { }

    public async create(person: Person): Promise<WorkoutRoutine> {
        if (person.workoutRoutine != null)
            throw new NotAcceptableException('Person already have workout routine')
        const workout = new WorkoutRoutine()
        person.workoutRoutine = workout
        await this.model.save(workout)
        await this.personUpdateService.update(person, null)
        await this.dailyRoutineCreateService.create(person.id)
        return workout
    }
}