import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutRoutineCreateController } from "src/controllers/workoutroutine.create.controller";
import { WorkoutRoutineFindAllController } from "src/controllers/workoutroutine.findall.controller";
import { WorkoutRoutine } from "src/models/workoutroutine.model";
import { WorkoutRoutineCreateService } from "src/services/workoutroutine.create.service";
import { WorkoutRoutineFindAllService } from "src/services/workoutroutine.findall.service";

@Module({
    imports: [TypeOrmModule.forFeature([WorkoutRoutine])],
    controllers: [WorkoutRoutineCreateController, WorkoutRoutineFindAllController],
    providers: [WorkoutRoutineCreateService, WorkoutRoutineFindAllService]
})
export class WorkoutRoutineModule { }