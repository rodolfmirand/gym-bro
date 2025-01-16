import { Injectable, NotFoundException } from "@nestjs/common";
import { CardioFindService } from "./cardio/cardio.find.service";
import { BodybuildingFindService } from "./bodybuilding/bodybuilding.find.service";
import { CardioUpdateDTO } from "src/dtos/request/cardio.update.dto";
import { BodybuildingUpdateDTO } from "src/dtos/request/bodybuilding.update.dto";
import { CardioUpdateService } from "./cardio/cardio.update.service";
import { BodybuildingUpdateService } from "./bodybuilding/bodybuilding.update.service";
import { InjectRepository } from "@nestjs/typeorm";
import { CardioExercise } from "src/models/cardioexercise.model";
import { Repository } from "typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";

@Injectable()
export class ExerciseUpdateService {

    constructor(@InjectRepository(CardioExercise) private cardioModel: Repository<CardioExercise>,
        @InjectRepository(BodyBuildingExercise) private bodybuildingModel: Repository<BodyBuildingExercise>,
        private readonly cardioUpdateService: CardioUpdateService,
        private readonly bodybuildingUpdateService: BodybuildingUpdateService
    ) { }

    public async update(id: string, body: CardioUpdateDTO | BodybuildingUpdateDTO): Promise<any> {
        const cardio = await this.cardioModel.findOne({ where: { id } })
        const bodybuilding = await this.bodybuildingModel.findOne({ where: { id } })
        if (cardio) {
            await this.cardioUpdateService.update(cardio, body as CardioUpdateDTO)
            return { status: 'Cardio exercise updated successfully' }
        } else if (bodybuilding) {
            await this.bodybuildingUpdateService.update(bodybuilding, body as BodybuildingUpdateDTO)
            return { status: 'Bodybuilding exercise updated successfully' }
        }
        throw new NotFoundException('No exercise with this ID was found')
    }
}