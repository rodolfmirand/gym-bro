import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyRoutineCreateController } from "src/controllers/dailyroutine.create.controller";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineCreateService } from "src/services/dailyroutine.create.service";
import { WorkoutRoutineModule } from "./workoutroutine.module";
import { DailyRoutineFindAllController } from "src/controllers/dailyroutine.findall.controller";
import { DailyRoutineFindAllService } from "src/services/dailyroutine.findall.service";
import { DailyRoutineUpdateService } from "src/services/dailyroutine.update.service";
import { ExerciseModule } from "./exercise.module";
import { DailyRoutineAddCardioService } from "src/services/dailyroutine.addcardio.service";
import { DailyRoutineFindByWorkoutIdService } from "src/services/dailyroutine.findbyworkoutid.service";
import { DailyRoutineAddCardioController } from "src/controllers/dailyroutine.addcardio.controller";
import { DailyRoutineAddBodybuildingService } from "src/services/dailyroutine.addbodybuilding.service";
import { DailyRoutineAddBodybuildingController } from "src/controllers/dailyroutine.addbodybuilding.controller";

@Module({
    imports: [TypeOrmModule.forFeature([DailyRoutine]), ExerciseModule, forwardRef(() => WorkoutRoutineModule)],
    controllers: [DailyRoutineCreateController, DailyRoutineFindAllController, DailyRoutineAddCardioController, DailyRoutineAddBodybuildingController],
    providers: [DailyRoutineCreateService, DailyRoutineFindAllService, DailyRoutineUpdateService, DailyRoutineAddCardioService, DailyRoutineUpdateService,
        DailyRoutineFindByWorkoutIdService, DailyRoutineAddBodybuildingService
    ],
    exports: [DailyRoutineCreateService, DailyRoutineUpdateService, DailyRoutineFindByWorkoutIdService]
})
export class DailyRoutineModule { }