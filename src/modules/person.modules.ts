import { Module } from "@nestjs/common";
import { PersonCreateController } from "src/controllers/person.create.controller";
import { PersonDeleteController } from "src/controllers/person.delete.controller";
import { PersonFindController } from "src/controllers/person.find.controller";
import { PersonFindAllController } from "src/controllers/person.findall.controller";
import { PersonUpdateController } from "src/controllers/person.update.controller";

@Module({
    controllers: [PersonCreateController, PersonDeleteController, PersonFindAllController, PersonFindController, PersonUpdateController]
})
export class PersonModule {}