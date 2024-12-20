import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class WorkoutRoutineFindByPersonIdService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>) { }

    public async findByPersonId(id: string): Promise<WorkoutRoutine> {
        const workout = await this.model.findOne({ where: { person: { id: id } }, relations: ['person'] })
        if (!workout)
            throw new NotFoundException('Workout Routine not found')
        return workout
    }
}