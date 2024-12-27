import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";
import { PersonFindService } from "./person.find.service";

@Injectable()
export class DailyRoutineFindByPersonIdService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>,
        private readonly personFindService: PersonFindService) { }

    public async findByPersonId(id: string): Promise<DailyRoutine[]> {
        const person = await this.personFindService.find(id)
        const dailyRoutine = person.workoutRoutine.dailyRoutine
        if (!dailyRoutine)
            throw new NotFoundException('Person do not have any daily routine')
        return dailyRoutine
    }
}