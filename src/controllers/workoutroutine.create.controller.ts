import { Body, Controller, Post } from "@nestjs/common";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { WorkoutRoutineCreateService } from "src/services/workoutroutine.create.service";

@Controller('/workout')
export class WorkoutRoutineCreateController {

    constructor(private readonly service: WorkoutRoutineCreateService) { }

    @Post()
    public async create(@Body() body: WorkoutRoutine): Promise<WorkoutRoutine> {
        return this.service.create(body)
    }

}