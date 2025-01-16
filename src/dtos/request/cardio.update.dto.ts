import { PartialType } from "@nestjs/mapped-types";
import { CardioRequestDTO } from "./cardio.request.dto";

export class CardioUpdateDTO extends PartialType(CardioRequestDTO) { }