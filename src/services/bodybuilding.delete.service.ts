import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { Repository } from "typeorm";

@Injectable()
export class BodyBuildingDeleteService {

    constructor(@InjectRepository(BodyBuildingExercise) private model: Repository<BodyBuildingExercise>) { }

    public async delete(id: string): Promise<any> {
        if (!await this.model.findOne({ where: { id } }))
            throw new NotFoundException('Bodybuilding exercise not found')
        await this.model.delete(id)
        return { status: 'Bodybuilding exercise deleted successfully' }
    }
}