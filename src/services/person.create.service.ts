import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";
import { WorkoutRoutineCreateService } from "./workoutroutine.create.service";
import { HashPasswordUtility } from "src/utils/hash.password.util";
import { PersonRequestDTO } from "src/dtos/request/person.request.dto";
import { PersonResponseDTO } from "src/dtos/response/person.response.dto";
import { PersonToPersoResponseDTOUtility } from "src/utils/person.topersonresponse.util";

@Injectable()
export class PersonCreateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>,
        private readonly workoutRoutineCreateService: WorkoutRoutineCreateService,
        private readonly hashPassword: HashPasswordUtility,
        private readonly util: PersonToPersoResponseDTOUtility
    ) { }

    public async create(body: PersonRequestDTO): Promise<PersonResponseDTO> {
        body.password = await this.hashPassword.hash(body.password)
        const person = await this.model.save(body)
        await this.workoutRoutineCreateService.create(person)
        return this.util.toPersonResponse(person)
    }
}