import { Controller, Get } from "@nestjs/common";

@Controller('/person')
export class PersonFindAllController {
    
    @Get()
    public findAll(): any {
        return {
            data: ''
        }
    }
}