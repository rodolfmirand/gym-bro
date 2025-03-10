import { Body, Controller, HttpException, HttpStatus, Param, ParseUUIDPipe, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { BodybuildingUpdateDTO } from "src/dtos/request/bodybuilding.update.dto";
import { CardioUpdateDTO } from "src/dtos/request/cardio.update.dto";
import { ExerciseUpdateService } from "src/services/exercise/exercise.update.service";

@Controller('exercise')
export class ExerciseUpdateController {

    constructor(private readonly service: ExerciseUpdateService) { }

    @UseGuards(AuthGuard)
    @Put(':id')
    public async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: CardioUpdateDTO | BodybuildingUpdateDTO): Promise<any> {
        try {
            return this.service.update(id, body)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error updating exercise.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}