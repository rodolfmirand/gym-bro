import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExerciseCreateController } from "src/controllers/exercise.create.controller";
import { ExerciseDeleteController } from "src/controllers/exercise.delete.controller";
import { ExerciseFindController } from "src/controllers/exercise.find.controller";
import { ExerciseFindAllController } from "src/controllers/exercise.findall.controller";
import { ExerciseUpdateController } from "src/controllers/exercise.update.controller";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingCreateService } from "src/services/bodybuilding.create.service";
import { BodyBuildingDeleteService } from "src/services/bodybuilding.delete.service";
import { BodybuildingFindService } from "src/services/bodybuilding.find.service";
import { BodybuildingFindAllService } from "src/services/bodybuilding.findall.service";
import { BodybuildingUpdateService } from "src/services/bodybuilding.update.service";
import { CardioCreateService } from "src/services/cardio.create.service";
import { CardioDeleteService } from "src/services/cardio.delete.service";
import { CardioFindService } from "src/services/cardio.find.service";
import { CardioFindAllService } from "src/services/cardio.findall.service";
import { CardioUpdateService } from "src/services/cardio.update.service";
import { ExerciseDeleteService } from '../services/exercise.delete.service';

@Module({
    imports: [TypeOrmModule.forFeature([BodyBuildingExercise, CardioExercise])],
    controllers: [ExerciseCreateController, ExerciseFindAllController, ExerciseFindController,
        ExerciseDeleteController, ExerciseUpdateController
    ],
    providers: [CardioCreateService, CardioFindService, CardioFindAllService, CardioUpdateService, CardioDeleteService,
        BodybuildingCreateService, BodybuildingFindService, BodybuildingFindAllService, BodybuildingUpdateService, BodyBuildingDeleteService,
        ExerciseDeleteService
    ],
    exports: [CardioCreateService, CardioFindService, CardioUpdateService, BodybuildingCreateService, BodybuildingFindService, BodybuildingUpdateService]
})
export class ExerciseModule { }