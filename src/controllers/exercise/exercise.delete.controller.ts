import { Controller, Delete, HttpException, HttpStatus, Param, ParseUUIDPipe, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { BodyBuildingDeleteService } from "src/services/exercise/bodybuilding/bodybuilding.delete.service";
import { CardioDeleteService } from "src/services/exercise/cardio/cardio.delete.service";
import { ExerciseDeleteService } from "src/services/exercise/exercise.delete.service";

@Controller('exercise')
export class ExerciseDeleteController {

    constructor(private readonly service: ExerciseDeleteService,
        private readonly bodybuildingService: BodyBuildingDeleteService, private readonly cardioService: CardioDeleteService) { }

    @UseGuards(AuthGuard)
    @Delete(':id')
    public async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        try {
            return this.service.delete(id)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error deleting exercise.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}