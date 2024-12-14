import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonCreateController } from "src/controllers/person.create.controller";
import { PersonDeleteController } from "src/controllers/person.delete.controller";
import { PersonFindController } from "src/controllers/person.find.controller";
import { PersonFindAllController } from "src/controllers/person.findall.controller";
import { PersonUpdateController } from "src/controllers/person.update.controller";
import { PersonModel } from "src/models/person.model";

@Module({
    imports: [TypeOrmModule.forFeature([PersonModel])],
    controllers: [PersonCreateController, PersonDeleteController, PersonFindAllController, PersonFindController, PersonUpdateController]
})
export class PersonModule {}