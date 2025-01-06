import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { Repository } from "typeorm";

@Injectable()
export class DailyRoutineDeleteService {

    constructor(@InjectRepository(DailyRoutine) private model: Repository<DailyRoutine>) { }

    public async delete(id: string): Promise<string> {
        const result = await this.model.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Daily routine not found')
        }
        return 'Daily routine deleted successfully'
    }
}