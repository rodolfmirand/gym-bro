import { Body, Controller, Param, Post } from "@nestjs/common";
import { WorkoutRoutineCreateService } from "src/services/workoutroutine.create.service";

@Controller('/workout')
export class WorkoutRoutineCreateController {

    constructor(private readonly service: WorkoutRoutineCreateService) { }

    @Post('/:id')
    public async create(@Param('id') id: string): Promise<any> {
        return this.service.create(id)
    }

}