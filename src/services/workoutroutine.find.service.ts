import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class WorkoutRoutineFindService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>) { }

    public async find(id: string) {
        const workout = await this.model.findOne({ where: { id }, relations: ['dailyRoutine', 'dailyRoutine.cardioExercises', 'dailyRoutine.bodybuildingExercises'] })
        if (!workout)
            throw new NotFoundException('Workout routine not found')
        return workout
    }
}