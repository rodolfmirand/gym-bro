import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingCreateService } from "src/services/exercise/bodybuilding/bodybuilding.create.service";
import { BodyBuildingDeleteService } from "src/services/exercise/bodybuilding/bodybuilding.delete.service";
import { BodybuildingFindService } from "src/services/exercise/bodybuilding/bodybuilding.find.service";
import { BodybuildingFindAllService } from "src/services/exercise/bodybuilding/bodybuilding.findall.service";
import { BodybuildingUpdateService } from "src/services/exercise/bodybuilding/bodybuilding.update.service";
import { CardioCreateService } from "src/services/exercise/cardio/cardio.create.service";
import { CardioDeleteService } from "src/services/exercise/cardio/cardio.delete.service";
import { CardioFindService } from "src/services/exercise/cardio/cardio.find.service";
import { CardioFindAllService } from "src/services/exercise/cardio/cardio.findall.service";
import { CardioUpdateService } from "src/services/exercise/cardio/cardio.update.service";
import { ExerciseDeleteService } from '../services/exercise/exercise.delete.service';
import { ExerciseUpdateService } from "src/services/exercise/exercise.update.service";
import { ExerciseFindService } from "src/services/exercise/exercise.find.service";
import { CardioCreateController } from "src/controllers/exercise/cardio/cardio.create.controller";
import { ExerciseFindController } from "src/controllers/exercise/exercise.find.controller";
import { ExerciseDeleteController } from "src/controllers/exercise/exercise.delete.controller";
import { ExerciseUpdateController } from "src/controllers/exercise/exercise.update.controller";
import { CardioFindAllController } from "src/controllers/exercise/cardio/cardio.findall.controller";
import { BodybuildingCreateController } from "src/controllers/exercise/bodybuilding/bodybuilding.create.controller";
import { BodybuildingFindAllController } from "src/controllers/exercise/bodybuilding/bodybuilding.findall.controller";

@Module({
    imports: [TypeOrmModule.forFeature([BodyBuildingExercise, CardioExercise])],
    controllers: [CardioCreateController, ExerciseFindController, ExerciseDeleteController, ExerciseUpdateController, CardioCreateController, CardioFindAllController, BodybuildingCreateController, BodybuildingFindAllController
    ],
    providers: [CardioCreateService, CardioFindService, CardioFindAllService, CardioUpdateService, CardioDeleteService, BodybuildingCreateService, BodybuildingFindService, BodybuildingFindAllService, BodybuildingUpdateService, BodyBuildingDeleteService, ExerciseDeleteService, ExerciseUpdateService, ExerciseFindService
    ],
    exports: [CardioCreateService, CardioFindService, CardioUpdateService, BodybuildingCreateService, BodybuildingFindService, BodybuildingUpdateService]
})
export class ExerciseModule { }