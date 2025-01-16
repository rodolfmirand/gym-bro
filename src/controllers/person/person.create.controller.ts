import { Body, Controller, Post } from "@nestjs/common";
import { PersonRequestDTO } from "src/dtos/request/person.request.dto";
import { PersonCreateService } from "src/services/person/person.create.service";

@Controller('person')
export class PersonCreateController {

    constructor(private readonly service: PersonCreateService) { }

    @Post()
    public async create(@Body() body: PersonRequestDTO): Promise<any> {
        return this.service.create(body)
    }
}