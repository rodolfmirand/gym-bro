import { PartialType } from "@nestjs/mapped-types";
import { BodybuildingRequestDTO } from "./bodybuilding.request.dto";

export class BodybuildingUpdateDTO extends PartialType(BodybuildingRequestDTO) { }