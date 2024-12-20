import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";
import { PersonFindService } from "./person.find.service";
import { PersonUpdateService } from "./person.update.service";

@Injectable()
export class WorkoutRoutineCreateService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>) { }

    public async create(body: WorkoutRoutine, id: string): Promise<WorkoutRoutine> {
        const person = await this.personFindService.find(id)
        const workout = new WorkoutRoutine(body.getName())
        person.setWorkoutRoutine(workout)
        await this.personUpdateService.update(id, person)
        return await this.model.save(workout)
    }
}