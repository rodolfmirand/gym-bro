import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";
import { PersonFindService } from "./person.find.service";
import { PersonUpdateService } from "./person.update.service";

@Injectable()
export class WorkoutRoutineCreateService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>,
        private readonly personFindService: PersonFindService,
        private readonly personUpdateService: PersonUpdateService) { }

    public async create(id: string): Promise<WorkoutRoutine> {
        const person = await this.personFindService.find(id)
        if (person.workoutRoutine != null)
            throw new NotAcceptableException('Person already have workout routine')
        const workout = new WorkoutRoutine()
        person.workoutRoutine = workout
        await this.model.save(workout)
        await this.personUpdateService.update(id, person)
        return workout
    }
}