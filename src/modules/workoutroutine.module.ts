import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { PersonModule } from "./person.module";
import { WorkoutRoutineCreateService } from "src/services/routines/workoutroutine/workoutroutine.create.service";
import { WorkoutRoutineFindAllService } from "src/services/routines/workoutroutine/workoutroutine.findall.service";
import { WorkoutRoutineFindByPersonIdService } from "src/services/routines/workoutroutine/workoutroutine.findbypersonid.service";
import { WorkoutRoutineUpdateService } from "src/services/routines/workoutroutine/workoutroutine.update.service";
import { WorkoutRoutineFindService } from "src/services/routines/workoutroutine/workoutroutine.find.service";
import { DailyRoutineModule } from "./dailyroutine.module";
import { Person } from "src/models/person.model";
import { WorkoutRoutineFindAllController } from "src/controllers/routines/workoutroutine/workoutroutine.findall.controller";
import { WorkoutRoutineFindByPersonIdController } from "src/controllers/routines/workoutroutine/workoutroutine.findbypersonid.controller";

@Module({
    imports: [TypeOrmModule.forFeature([WorkoutRoutine, Person]), forwardRef(() => PersonModule), DailyRoutineModule],
    controllers: [WorkoutRoutineFindAllController, WorkoutRoutineFindByPersonIdController],
    providers: [WorkoutRoutineCreateService, WorkoutRoutineFindAllService, WorkoutRoutineFindByPersonIdService,
        WorkoutRoutineUpdateService, WorkoutRoutineFindService],
    exports: [WorkoutRoutineCreateService, WorkoutRoutineFindByPersonIdService, WorkoutRoutineUpdateService, WorkoutRoutineFindService]
})
export class WorkoutRoutineModule { }