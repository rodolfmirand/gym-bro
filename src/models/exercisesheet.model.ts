import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ExercisesSheetModel {

    @PrimaryColumn()
    private id: string

}