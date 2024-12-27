import { Exclude } from "class-transformer"
import { Person } from "src/models/person.model"
import { WorkoutRoutine } from "src/models/workoutroutine.model"

export class PersonResponseDTO {
    id: string
    name: string
    username: string
    email: string
    height: number
    weight: number
    birthDate: string
    workoutRoutine: WorkoutRoutine

    constructor(person: Person) {
        this.id = person.id
        this.name = person.name
        this.username = person.username
        this.email = person.email
        this.height = person.height
        this.weight = person.weight
        this.birthDate = person.birthDate
        this.workoutRoutine = person.workoutRoutine
    }
}