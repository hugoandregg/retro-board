import { MigrationInterface, QueryRunner, Table } from 'typeorm'

const TABLE_NAME = 'board_column'

export class CreateBoardColumnTable1601851422377 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: TABLE_NAME,
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'uuid'
					},
					{
						name: 'title',
						type: 'varchar',
						isNullable: false
					}
				]
			}),
			true
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(TABLE_NAME)
	}
}
