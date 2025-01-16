import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonCreateController } from "src/controllers/person.create.controller";
import { PersonDeleteController } from "src/controllers/person.delete.controller";
import { PersonFindController } from "src/controllers/person.find.controller";
import { PersonFindAllController } from "src/controllers/person.findall.controller";
import { PersonUpdateController } from "src/controllers/person.update.controller";
import { Person } from "src/models/person.model";
import { PersonCreateService } from 'src/services/person/person.create.service';
import { PersonDeleteService } from 'src/services/person/person.delete.service';
import { PersonFindService } from 'src/services/person/person.find.service';
import { PersonFindAllService } from 'src/services/person/person.findall.service';
import { PersonUpdateService } from 'src/services/person/person.update.service';
import { WorkoutRoutineModule } from './workoutroutine.module';
import { PersonFindByUsernameService } from 'src/services/person/person.findbyusername.service';
import { HashPasswordUtility } from 'src/utils/hash.password.util';
import { PersonToPersoResponseDTOUtility } from 'src/utils/person.topersonresponse.util';

@Module({
    imports: [TypeOrmModule.forFeature([Person]), WorkoutRoutineModule],
    controllers: [PersonCreateController, PersonDeleteController, PersonFindAllController, PersonFindController, PersonUpdateController],
    providers: [PersonCreateService, PersonFindService, PersonFindAllService, PersonDeleteService, PersonUpdateService, 
        PersonFindByUsernameService, HashPasswordUtility, PersonToPersoResponseDTOUtility],
    exports: [PersonFindService, PersonUpdateService, PersonFindByUsernameService]
})
export class PersonModule { }