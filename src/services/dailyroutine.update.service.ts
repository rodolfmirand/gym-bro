import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from 'src/models/dailyroutine.model';
import { Repository } from "typeorm";

@Injectable()
export class DailyRoutineUpdateService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>) { }

    public async update(body: DailyRoutine[]): Promise<DailyRoutine[]> {
        return this.model.save(body)
    }
}