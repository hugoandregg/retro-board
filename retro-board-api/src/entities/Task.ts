import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

import BoardColumn from "./BoardColumn";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  @IsNotEmpty()
  content: string;

  @ManyToOne(() => BoardColumn, (column) => column.tasks)
  columnId: number;
}
