import { PartialType } from '@nestjs/mapped-types';
import { PersonRequestDTO } from '../request/person.request.dto';

export class PersonUpdateDTO extends PartialType(PersonRequestDTO) { }