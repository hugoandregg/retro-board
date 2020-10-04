import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

const TABLE_NAME = "task";
const NEW_COLUMN_NAME = "columnId";

export class UpdateTaskTable1601852894235 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      TABLE_NAME,
      new TableColumn({
        name: NEW_COLUMN_NAME,
        type: "uuid",
        isNullable: false,
      })
    );

    await queryRunner.createForeignKeys(TABLE_NAME, [
      new TableForeignKey({
        columnNames: [NEW_COLUMN_NAME],
        referencedColumnNames: ["id"],
        referencedTableName: "board_column",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(TABLE_NAME);
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf(NEW_COLUMN_NAME) !== -1
    );

    await queryRunner.dropForeignKey(TABLE_NAME, foreignKey);
  }
}
