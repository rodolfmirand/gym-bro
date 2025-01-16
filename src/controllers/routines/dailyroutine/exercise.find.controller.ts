import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { CardioExercise } from "src/models/cardioexercise.model";
import { ExerciseFindService } from "src/services/exercise.find.service";

@Controller('exercise')
export class ExerciseFindController {

    constructor(private readonly service: ExerciseFindService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        return this.service.find(id)
    }
}