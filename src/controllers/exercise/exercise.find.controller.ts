import { Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { ExerciseFindService } from "src/services/exercise/exercise.find.service";

@Controller('exercise')
export class ExerciseFindController {

    constructor(private readonly service: ExerciseFindService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        try {
            return this.service.find(id)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error finding exercise.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}