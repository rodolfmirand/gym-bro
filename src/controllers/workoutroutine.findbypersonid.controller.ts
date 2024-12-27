import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { WorkoutRoutineFindByPersonIdService } from "src/services/workoutroutine.findbypersonid.service";

@Controller('/workout')
export class WorkoutRoutineFindByPersonIdController {

    constructor(private readonly service: WorkoutRoutineFindByPersonIdService) { }

    @Get('/person/:id')
    public async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<WorkoutRoutine> {
        return await this.service.findByPersonId(id)
    }
}