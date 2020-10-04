import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

import { Task } from "./Task";

@Entity()
export class BoardColumn {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @OneToMany((type) => Task, (task) => task.id)
  tasks: Array<Task>;
}
