import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { ColumnSeed,ToDoColumn } from './column.seed'
import { TaskSeed,ToDoTasks } from './task.seed'
import Task from '../entities/Task'

export class SeedColumn1602679793738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const toDoColumnSeed = await getRepository("board_column","seed").save(
            ColumnSeed
        );
        TaskSeed.map(async task => {
            const newTask = await getRepository("task","seed").save(
                new Task({ column: (task.columnId), content:task.content }) // column is expecting number?
              );
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
