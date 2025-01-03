import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";
import { WorkoutRoutineCreateService } from "./workoutroutine.create.service";
import { HashPasswordUtility } from "src/utils/hash.password.util";
import { PersonRequestDTO } from "src/dtos/request/person.request.dto";
import { PersonToPersoResponseDTOUtility } from "src/utils/person.topersonresponse.util";
import { PersonResponseDTO } from "src/dtos/response/person.response.dto";

@Injectable()
export class PersonCreateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>,
        private readonly workoutRoutineCreateService: WorkoutRoutineCreateService,
        private readonly hashPassword: HashPasswordUtility,
        private readonly util: PersonToPersoResponseDTOUtility
    ) { }

    public async create(body: PersonRequestDTO): Promise<string> {
        body.password = await this.hashPassword.hash(body.password)
        await this.workoutRoutineCreateService.create(await this.model.save(body))
        return 'Person created successfully'
    }
}