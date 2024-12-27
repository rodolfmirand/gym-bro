import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CardioRequestDTO } from "src/dtos/request/cardio.request.dto";
import { CardioExercise } from "src/models/cardioexercise.model";
import { DailyRoutineCreateCardioService } from "src/services/dailyroutine.createcardio.service";

@Controller('daily')
export class DailyRoutineCreateCardioController {

    constructor(private readonly service: DailyRoutineCreateCardioService) { }

    @UseGuards(AuthGuard)
    @Post('cardio/:id')
    public async add(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: CardioRequestDTO): Promise<CardioExercise> {
        return this.service.add(id, body)
    }
}