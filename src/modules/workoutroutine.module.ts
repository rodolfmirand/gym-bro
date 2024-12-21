import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutRoutineCreateController } from "src/controllers/workoutroutine.create.controller";
import { WorkoutRoutineFindAllController } from "src/controllers/workoutroutine.findall.controller";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { PersonModule } from "./person.module";
import { WorkoutRoutineCreateService } from "src/services/workoutroutine.create.service";
import { WorkoutRoutineFindAllService } from "src/services/workoutroutine.findall.service";
import { WorkoutRoutineFindByPersonIdService } from "src/services/workoutroutine.findbypersonid.service";
import { WorkoutRoutineFindByPersonIdController } from "src/controllers/workoutroutine.findbypersonid.controller";
import { WorkoutRoutineAddDailyRoutineService } from "src/services/workoutroutine.adddailyroutine.service";
import { WorkoutRoutineUpdateService } from "src/services/workoutroutine.update.service";
import { DailyRoutineModule } from "./dailyroutine.module";
import { WorkoutRoutineFindService } from "src/services/workoutroutine.find.service";

@Module({
    imports: [TypeOrmModule.forFeature([WorkoutRoutine]), PersonModule],
    controllers: [WorkoutRoutineCreateController, WorkoutRoutineFindAllController, WorkoutRoutineFindByPersonIdController],
    providers: [WorkoutRoutineCreateService, WorkoutRoutineFindAllService, WorkoutRoutineFindByPersonIdService,
        WorkoutRoutineAddDailyRoutineService, WorkoutRoutineUpdateService, WorkoutRoutineFindService],
    exports: [WorkoutRoutineFindByPersonIdService, WorkoutRoutineAddDailyRoutineService, WorkoutRoutineUpdateService, WorkoutRoutineFindService]
})
export class WorkoutRoutineModule { }