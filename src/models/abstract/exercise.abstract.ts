import { CardioExerciseEnum } from "../enum/cardioexercise.enum"
import { ExerciseType } from "../enum/exercisetype.enum"
import { MuscleGroupEnum } from "../enum/musclegroup.enum"

export abstract class Exercise {
    protected name: string
    protected description: string
    protected muscleGroup: MuscleGroupEnum
    protected cardioExercise: CardioExerciseEnum
    protected type: ExerciseType
    protected equipment: string
    protected sets: number
    protected reps: number
    protected rest: number
    protected time: string
    protected videoUrl: string
}