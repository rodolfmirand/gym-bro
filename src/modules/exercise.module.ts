import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CardioCreateController } from "src/controllers/cardio.create.controller";
import { ExerciseDeleteController } from "src/controllers/exercise.delete.controller";
import { ExerciseFindController } from "src/controllers/exercise.find.controller";
import { CardioFindAllController } from "src/controllers/cardio.findall.controller";
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
import { ExerciseUpdateService } from "src/services/exercise.update.service";
import { BodybuildingCreateController } from "src/controllers/bodybuilding.create.controller";
import { BodybuildingFindAllController } from "src/controllers/bodybuilding.findall.controller";
import { ExerciseFindService } from "src/services/exercise.find.service";

@Module({
    imports: [TypeOrmModule.forFeature([BodyBuildingExercise, CardioExercise])],
    controllers: [CardioCreateController, ExerciseFindController, ExerciseDeleteController, ExerciseUpdateController, CardioCreateController, CardioFindAllController, BodybuildingCreateController, BodybuildingFindAllController
    ],
    providers: [CardioCreateService, CardioFindService, CardioFindAllService, CardioUpdateService, CardioDeleteService, BodybuildingCreateService, BodybuildingFindService, BodybuildingFindAllService, BodybuildingUpdateService, BodyBuildingDeleteService, ExerciseDeleteService, ExerciseUpdateService, ExerciseFindService
    ],
    exports: [CardioCreateService, CardioFindService, CardioUpdateService, BodybuildingCreateService, BodybuildingFindService, BodybuildingUpdateService]
})
export class ExerciseModule { }