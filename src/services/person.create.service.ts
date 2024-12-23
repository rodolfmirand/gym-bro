import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";
import { WorkoutRoutineCreateService } from "./workoutroutine.create.service";

@Injectable()
export class PersonCreateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>,
        private readonly workoutRoutineCreateService: WorkoutRoutineCreateService) { }

    public async create(body: Person): Promise<Person> {
        const person = await this.model.save(body)
        this.workoutRoutineCreateService.create(person)
        return person
    }
}