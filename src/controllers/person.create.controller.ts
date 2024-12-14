import { Controller, Post } from "@nestjs/common";

@Controller('/person')
export class PersonCreateController {

    @Post()
    public create(): any {
        return {
            data: ''
        }
    }
}