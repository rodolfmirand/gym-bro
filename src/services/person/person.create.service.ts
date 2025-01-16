import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";
import { WorkoutRoutineCreateService } from "../routines/workoutroutine/workoutroutine.create.service";
import { HashPasswordUtility } from "src/utils/hash.password.util";
import { PersonRequestDTO } from "src/dtos/request/person.request.dto";

@Injectable()
export class PersonCreateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>,
        private readonly workoutRoutineCreateService: WorkoutRoutineCreateService,
        private readonly hashPassword: HashPasswordUtility,
    ) { }

    public async create(body: PersonRequestDTO): Promise<any> {
        body.password = await this.hashPassword.hash(body.password)
        const person = await this.model.save(body)
        await this.workoutRoutineCreateService.create(person)
        return { status: 'Person created successfully' }
    }
}