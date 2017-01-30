import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Category {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;

}
