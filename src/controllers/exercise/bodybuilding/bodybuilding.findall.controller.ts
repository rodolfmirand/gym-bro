import { Controller, Get } from "@nestjs/common";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { BodybuildingFindAllService } from "src/services/exercise/bodybuilding/bodybuilding.findall.service";

@Controller('exercise')
export class BodybuildingFindAllController {

    constructor(private readonly service: BodybuildingFindAllService) { }

    @Get('bodybuilding')
    public async findAll(): Promise<BodyBuildingExercise[]> {
        return this.service.findAll()
    }
}