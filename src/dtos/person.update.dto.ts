import { PartialType } from '@nestjs/mapped-types';
import { PersonRequestDTO } from './person.request.dto';

export class PersonUpdateDTO extends PartialType(PersonRequestDTO) { }