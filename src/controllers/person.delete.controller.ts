import { Controller, Delete } from "@nestjs/common";

@Controller('/person')
export class PersonDeleteController {
    
    @Delete(':id')
    public delete(): any {
        return {
            data: ''
        }
    }
}