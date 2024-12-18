import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExerciseCreateController } from "src/controllers/exercise.create.controller";
import { ExerciseDeleteController } from "src/controllers/exercise.delete.controller";
import { ExerciseFindController } from "src/controllers/exercise.find.controller";
import { ExerciseFindAllController } from "src/controllers/exercise.findall.controller";
import { ExerciseUpdateController } from "src/controllers/exercise.update.controller";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";

@Module({
    imports: [TypeOrmModule.forFeature([BodyBuildingExercise, CardioExercise])],
    controllers: [ExerciseCreateController, ExerciseFindAllController, ExerciseFindController,
        ExerciseDeleteController, ExerciseUpdateController
    ]
})
export class ExerciseModule {}