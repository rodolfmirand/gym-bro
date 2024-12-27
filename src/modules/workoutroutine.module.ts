import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutRoutineFindAllController } from "src/controllers/workoutroutine.findall.controller";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { PersonModule } from "./person.module";
import { WorkoutRoutineCreateService } from "src/services/workoutroutine.create.service";
import { WorkoutRoutineFindAllService } from "src/services/workoutroutine.findall.service";
import { WorkoutRoutineFindByPersonIdService } from "src/services/workoutroutine.findbypersonid.service";
import { WorkoutRoutineFindByPersonIdController } from "src/controllers/workoutroutine.findbypersonid.controller";
import { WorkoutRoutineUpdateService } from "src/services/workoutroutine.update.service";
import { WorkoutRoutineFindService } from "src/services/workoutroutine.find.service";
import { DailyRoutineModule } from "./dailyroutine.module";

@Module({
    imports: [TypeOrmModule.forFeature([WorkoutRoutine]), forwardRef(() => PersonModule), DailyRoutineModule],
    controllers: [WorkoutRoutineFindAllController, WorkoutRoutineFindByPersonIdController],
    providers: [WorkoutRoutineCreateService, WorkoutRoutineFindAllService, WorkoutRoutineFindByPersonIdService,
        WorkoutRoutineUpdateService, WorkoutRoutineFindService],
    exports: [WorkoutRoutineCreateService, WorkoutRoutineFindByPersonIdService, WorkoutRoutineUpdateService, WorkoutRoutineFindService]
})
export class WorkoutRoutineModule { }