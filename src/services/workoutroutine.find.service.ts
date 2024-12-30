import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class WorkoutRoutineFindService {

    constructor(@InjectRepository(WorkoutRoutine) private model: Repository<WorkoutRoutine>) { }

    public async find(id: string) {
        const workout = this.model
            .createQueryBuilder("workout")
            .leftJoinAndSelect("workout.dailyRoutine", "dailyRoutine")
            .where("workout.id = :id", { id })
            .orderBy("dailyRoutine.name", "ASC")  // Ordena as rotinas diárias pelo nome
            .getOne();

        if (!workout)
            throw new NotFoundException('Workout routine not found')
        return workout
    }
}