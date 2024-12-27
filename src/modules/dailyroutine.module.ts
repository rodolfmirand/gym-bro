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
import { DailyRoutineCreateCardioService } from "src/services/dailyroutine.createcardio.service";
import { DailyRoutineFindByWorkoutIdService } from "src/services/dailyroutine.findbyworkoutid.service";
import { DailyRoutineCreateCardioController } from "src/controllers/dailyroutine.createcardio.controller";
import { DailyRoutineCreateBodybuildingService } from "src/services/dailyroutine.createbodybuilding.service";
import { DailyRoutineCreateBodybuildingController } from "src/controllers/dailyroutine.createbodybuilding.controller";
import { DailyRoutineFindService } from "src/services/dailyroutine.find.service";
import { DailyRoutineAddCardioService } from "src/services/dailyroutine.addcardio.service";
import { DailyRoutineAddCardioController } from "src/controllers/dailyroutine.addcardio.controller";
import { DailyRoutineAddBodybuildingService } from "src/services/dailyroutine.addbodybuilding.service";
import { DailyRoutineAddBodybuildingController } from "src/controllers/dailyroutine.addbodybuilding.controller";
import { DailyRoutineRemoveCardioService } from "src/services/dailyroutine.removecardio.service";
import { DailyRoutineRemoveCardioController } from "src/controllers/dailyroutine.removecardio.controller";
import { DailyRoutineFindByPersonIdService } from "src/services/dailyroutine.findbypersonid.service";
import { PersonModule } from "./person.module";
import { DailyRoutineFindByPersonIdController } from "src/controllers/daillyroutine.findbypersonid.controller";

@Module({
    imports: [TypeOrmModule.forFeature([DailyRoutine]), ExerciseModule, forwardRef(() => WorkoutRoutineModule), forwardRef(() => PersonModule)],
    controllers: [DailyRoutineCreateController, DailyRoutineFindAllController, DailyRoutineCreateBodybuildingController, DailyRoutineCreateCardioController,
        DailyRoutineAddCardioController, DailyRoutineAddBodybuildingController, DailyRoutineRemoveCardioController, DailyRoutineFindByPersonIdController
    ],
    providers: [DailyRoutineCreateService, DailyRoutineFindAllService, DailyRoutineUpdateService, DailyRoutineCreateCardioService, DailyRoutineUpdateService,
        DailyRoutineFindByWorkoutIdService, DailyRoutineCreateBodybuildingService, DailyRoutineFindService, DailyRoutineAddCardioService, DailyRoutineAddBodybuildingService,
        DailyRoutineRemoveCardioService, DailyRoutineFindByPersonIdService
    ],
    exports: [DailyRoutineCreateService, DailyRoutineUpdateService, DailyRoutineFindByWorkoutIdService]
})
export class DailyRoutineModule { }