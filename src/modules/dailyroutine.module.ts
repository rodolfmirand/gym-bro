import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyRoutineCreateController } from "src/controllers/dailyroutine.create.controller";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineCreateService } from "src/services/dailyroutine.create.service";
import { WorkoutRoutineModule } from "./workoutroutine.module";
import { DailyRoutineFindAllController } from "src/controllers/dailyroutine.findall.controller";
import { DailyRoutineFindAllService } from "src/services/dailyroutine.findall.service";

@Module({
    imports: [TypeOrmModule.forFeature([DailyRoutine]), WorkoutRoutineModule],
    controllers: [DailyRoutineCreateController, DailyRoutineFindAllController],
    providers: [DailyRoutineCreateService, DailyRoutineFindAllService]
})
export class DailyRoutineModule { }