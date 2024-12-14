import { Controller, Get } from "@nestjs/common";

@Controller('/person')
export class PersonFindController {

    @Get(':id')
    public find(): any {
        return {
            data: ''
        }
    }
}