import { Body, Controller, Param, Post } from "@nestjs/common";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { WorkoutRoutineCreateService } from "src/services/workoutroutine.create.service";

@Controller('/workout')
export class WorkoutRoutineCreateController {

    constructor(private readonly service: WorkoutRoutineCreateService) { }

    @Post('/:id')
    public async create(@Body() body: WorkoutRoutine, @Param('id') id: string): Promise<WorkoutRoutine> {
        return this.service.create(body, id)
    }

}