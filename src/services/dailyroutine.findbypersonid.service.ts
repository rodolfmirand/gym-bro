import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { PersonFindService } from "./person.find.service";

@Injectable()
export class DailyRoutineFindByPersonIdService {

    constructor(private readonly personFindService: PersonFindService) { }

    public async findByPersonId(id: string): Promise<DailyRoutine[]> {
        const person = await this.personFindService.find(id)
        const dailyRoutine = person.workoutRoutine.dailyRoutine
        if (!dailyRoutine)
            throw new NotFoundException('Person do not have any daily routine')
        return dailyRoutine
    }
}