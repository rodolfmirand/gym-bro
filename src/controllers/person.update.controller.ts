import { Controller, Put } from "@nestjs/common";

@Controller('/person')
export class PersonUpdateController {
    
    @Put(':id')
    public update(): any {
        return {
            data: ''
        }
    }
}