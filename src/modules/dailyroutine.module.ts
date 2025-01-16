import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineCreateService } from "src/services/routines/dailyroutine/dailyroutine.create.service";
import { WorkoutRoutineModule } from "./workoutroutine.module";
import { DailyRoutineFindAllService } from "src/services/routines/dailyroutine/dailyroutine.findall.service";
import { DailyRoutineUpdateService } from "src/services/routines/dailyroutine/dailyroutine.update.service";
import { ExerciseModule } from "./exercise.module";
import { DailyRoutineCreateCardioService } from "src/services/routines/dailyroutine/dailyroutine.createcardio.service";
import { DailyRoutineFindByWorkoutIdService } from "src/services/routines/dailyroutine/dailyroutine.findbyworkoutid.service";
import { DailyRoutineCreateBodybuildingService } from "src/services/routines/dailyroutine/dailyroutine.createbodybuilding.service";
import { DailyRoutineFindService } from "src/services/routines/dailyroutine/dailyroutine.find.service";
import { DailyRoutineAddCardioService } from "src/services/routines/dailyroutine/dailyroutine.addcardio.service";
import { DailyRoutineAddBodybuildingService } from "src/services/routines/dailyroutine/dailyroutine.addbodybuilding.service";
import { DailyRoutineRemoveCardioService } from "src/services/routines/dailyroutine/dailyroutine.removecardio.service";
import { DailyRoutineFindByPersonIdService } from "src/services/routines/dailyroutine/dailyroutine.findbypersonid.service";
import { PersonModule } from "./person.module";
import { DailyRoutineDeleteService } from "src/services/routines/dailyroutine/dailyroutine.delete.service";
import { DailyRoutineCreateController } from "src/controllers/routines/dailyroutine/dailyroutine.create.controller";
import { DailyRoutineFindByPersonIdController } from "src/controllers/routines/dailyroutine/daillyroutine.findbypersonid.controller";
import { DailyRoutineAddBodybuildingController } from "src/controllers/routines/dailyroutine/dailyroutine.addbodybuilding.controller";
import { DailyRoutineAddCardioController } from "src/controllers/routines/dailyroutine/dailyroutine.addcardio.controller";
import { DailyRoutineCreateBodybuildingController } from "src/controllers/routines/dailyroutine/dailyroutine.createbodybuilding.controller";
import { DailyRoutineCreateCardioController } from "src/controllers/routines/dailyroutine/dailyroutine.createcardio.controller";
import { DailyRoutineDeleteController } from "src/controllers/routines/dailyroutine/dailyroutine.delete.controller";
import { DailyRoutineFindController } from "src/controllers/routines/dailyroutine/dailyroutine.find.controller";
import { DailyRoutineFindAllController } from "src/controllers/routines/dailyroutine/dailyroutine.findall.controller";
import { DailyRoutineRemoveCardioController } from "src/controllers/routines/dailyroutine/dailyroutine.removecardio.controller";

@Module({
    imports: [TypeOrmModule.forFeature([DailyRoutine]), ExerciseModule, forwardRef(() => WorkoutRoutineModule), forwardRef(() => PersonModule)],
    controllers: [DailyRoutineCreateController, DailyRoutineFindAllController, DailyRoutineCreateBodybuildingController, DailyRoutineCreateCardioController,
        DailyRoutineAddCardioController, DailyRoutineAddBodybuildingController, DailyRoutineRemoveCardioController, DailyRoutineFindByPersonIdController,
        DailyRoutineFindController, DailyRoutineDeleteController
    ],
    providers: [DailyRoutineCreateService, DailyRoutineFindAllService, DailyRoutineUpdateService, DailyRoutineCreateCardioService, DailyRoutineUpdateService,
        DailyRoutineFindByWorkoutIdService, DailyRoutineCreateBodybuildingService, DailyRoutineFindService, DailyRoutineAddCardioService, DailyRoutineAddBodybuildingService,
        DailyRoutineRemoveCardioService, DailyRoutineFindByPersonIdService, DailyRoutineDeleteService
    ],
    exports: [DailyRoutineCreateService, DailyRoutineUpdateService, DailyRoutineFindByWorkoutIdService]
})
export class DailyRoutineModule { }