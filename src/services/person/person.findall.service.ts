import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonFindAllService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async findAll(): Promise<Person[]> {
        return await this.model.find({
            relations: ['workoutRoutine', 'workoutRoutine.dailyRoutine',
                'workoutRoutine.dailyRoutine.cardioExercises', 'workoutRoutine.dailyRoutine.bodybuildingExercises']
        })
    }
}