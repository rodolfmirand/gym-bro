import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/models/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonDeleteService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async delete(id: string): Promise<any> {
        const result = await this.model.delete(id);

        if (result.affected === 0)
            throw new NotFoundException('Person not found')

        return { status: 'Person deleted successfully' }
    }
}