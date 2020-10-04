import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity()
export class Task {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  @IsNotEmpty()
  content: string;
}
