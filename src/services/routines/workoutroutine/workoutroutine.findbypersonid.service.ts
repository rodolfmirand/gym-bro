import { Injectable, NotFoundException } from "@nestjs/common";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { PersonFindService } from "../../person/person.find.service";

@Injectable()
export class WorkoutRoutineFindByPersonIdService {

    constructor(private readonly personFindService: PersonFindService) { }

    public async findByPersonId(id: string): Promise<WorkoutRoutine> {
        const person = await this.personFindService.find(id)
        const workout = person.workoutRoutine
        if (!workout)
            throw new NotFoundException('Workout Routine not created yet')
        return workout
    }
}