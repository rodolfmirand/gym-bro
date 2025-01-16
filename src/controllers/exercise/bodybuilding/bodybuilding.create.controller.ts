import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { BodybuildingRequestDTO } from "src/dtos/request/bodybuilding.request.dto";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { BodybuildingCreateService } from "src/services/exercise/bodybuilding/bodybuilding.create.service";

@Controller('exercise')
export class BodybuildingCreateController {

    constructor(private readonly service: BodybuildingCreateService) { }

    @UseGuards(AuthGuard)
    @Post('bodybuilding')
    public async create(@Body() body: BodybuildingRequestDTO): Promise<BodyBuildingExercise> {
        return this.service.create(body)
    }
}