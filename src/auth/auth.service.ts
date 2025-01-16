import { Injectable } from "@nestjs/common";
import { PersonFindByUsernameService } from "../services/person/person.findbyusername.service";
import * as bcrypt from 'bcrypt';
import { Person } from "src/models/person.model";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private readonly personFindByUsernameService: PersonFindByUsernameService,
        private readonly jwtService: JwtService
    ) { }

    public async validate(username: string, password: string): Promise<Person> {
        const person = await this.personFindByUsernameService.find(username)
        if (await bcrypt.compare(password, person.password))
            return person
        return null
    }

    public async login(person: Person) {
        const payload = {
            username: person.username,
            sub: person.id
        }
        return {
            access: {
                token: this.jwtService.sign(payload)
            },
            person: {
                id: person.id,
                workoutRoutine: {
                    id: person.workoutRoutine.id
                }
            }
        }
    }
}