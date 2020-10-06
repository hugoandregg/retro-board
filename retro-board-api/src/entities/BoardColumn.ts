import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";

import Task from "./Task";

@Entity()
class BoardColumn extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @OneToMany((type) => Task, (task) => task.id)
  tasks: Array<Task>;

  constructor(title?: string) {
    super();
    this.title = title;
  }
}

export default BoardColumn;
