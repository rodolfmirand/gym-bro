import { Module, Injectable } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonCreateController } from "src/controllers/person.create.controller";
import { PersonDeleteController } from "src/controllers/person.delete.controller";
import { PersonFindController } from "src/controllers/person.find.controller";
import { PersonFindAllController } from "src/controllers/person.findall.controller";
import { PersonUpdateController } from "src/controllers/person.update.controller";
import { Person } from "src/models/person.model";
import { PersonCreateService } from 'src/services/person.create.service';
import { PersonDeleteService } from 'src/services/person.delete.service';
import { PersonFindService } from 'src/services/person.find.service';
import { PersonFindAllService } from 'src/services/person.findAll.service';
import { PersonUpdateService } from 'src/services/person.update.service';

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    controllers: [PersonCreateController, PersonDeleteController, PersonFindAllController, PersonFindController, PersonUpdateController],
    providers: [PersonCreateService, PersonFindService, PersonFindAllService, PersonDeleteService, PersonUpdateService]
})
export class PersonModule { }