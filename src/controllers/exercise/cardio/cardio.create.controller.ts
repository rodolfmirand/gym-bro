import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CardioRequestDTO } from "src/dtos/request/cardio.request.dto";
import { CardioExercise } from "src/models/cardioexercise.model";
import { CardioCreateService } from "src/services/exercise/cardio/cardio.create.service";

@Controller('exercise')
export class CardioCreateController {

    constructor(private readonly service: CardioCreateService) { }

    @UseGuards(AuthGuard)
    @Post('cardio')
    public async create(@Body() body: CardioRequestDTO): Promise<CardioExercise> {
        return this.service.create(body)
    }
}