import { Controller, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
import { DailyRoutineDeleteService } from "src/services/routines/dailyroutine/dailyroutine.delete.service";

@Controller('daily')
export class DailyRoutineDeleteController {

    constructor(private readonly service: DailyRoutineDeleteService) { }

    @Delete(':id/:idPerson')
<<<<<<< HEAD
    public async delete(@Param('id', new ParseUUIDPipe()) id: string, @Param('idW', new ParseUUIDPipe()) idPerson: string): Promise<any> {
        return this.service.delete(id, idPerson)
=======
    public async delete(@Param('id', new ParseUUIDPipe()) id: string, @Param('idPerson', new ParseUUIDPipe()) idPerson: string): Promise<any> {
        return this.dailyRoutineDeleteService.delete(id, idPerson)
>>>>>>> e4d1509f07e98edc210a8af47854b953860de841
    }
}