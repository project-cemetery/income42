import { MigrationInterface, QueryRunner } from 'typeorm'

export class UserCreated1526615260035 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id"       integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "login"    varchar                           NOT NULL,
                "password" varchar                           NOT NULL,

                CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login")
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`)
    }

}
