import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonDeleteService {
    
    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async delete(id: string): Promise<string> {
        if (!await this.model.findOne({ where: { id } }))
            throw new NotFoundException('Person not found')
        await this.model.delete(id)
        return 'Person deleted successfully'
    }

}