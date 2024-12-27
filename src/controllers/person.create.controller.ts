import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { PersonRequestDTO } from "src/dtos/person.request.dto";
import { PersonResponseDTO } from "src/dtos/person.response.dto";
import { PersonCreateService } from "src/services/person.create.service";

@Controller('/person')
export class PersonCreateController {

    constructor(private readonly service: PersonCreateService) { }

    @Post()
    public async create(@Body() body: PersonRequestDTO): Promise<PersonResponseDTO> {
        return this.service.create(body)
    }
}