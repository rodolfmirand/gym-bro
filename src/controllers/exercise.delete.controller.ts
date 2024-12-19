import { Controller, Delete, Param } from "@nestjs/common";
import { BodyBuildingDeleteService } from "src/services/bodybuilding.delete.service";
import { CardioDeleteService } from "src/services/cardio.delete.service";

@Controller('/exercise')
export class ExerciseDeleteController {

    constructor(private readonly bodybuildingService: BodyBuildingDeleteService, private readonly cardioService: CardioDeleteService) { }

    @Delete('/bodybuilding/:id')
    public async deleteBodybuilding(@Param('id') id: string): Promise<string> {
        return this.bodybuildingService.delete(id)
    }

    @Delete('/cardio/:id')
    public async deleteCardio(@Param('id') id: string): Promise<string> {
        return this.cardioService.delete(id)
    }
}