import { Body, Controller, Get } from "@nestjs/common";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { WorkoutRoutineFindAllService } from "src/services/workoutroutine.findall.service";

@Controller('/workout')
export class WorkoutRoutineFindAllController {

    constructor(private readonly service: WorkoutRoutineFindAllService) { }

    @Get()
    public async findall(@Body() body: WorkoutRoutine): Promise<WorkoutRoutine[]> {
        return this.service.findAll()
    }

}