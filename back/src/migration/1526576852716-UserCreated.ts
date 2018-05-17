import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserCreated1526576852716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "app_user" (
                "id"   integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "name" varchar                           NOT NULL
            )`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            DROP TABLE "app_user"
        `)
    }

}
