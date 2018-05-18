import { MigrationInterface, QueryRunner } from 'typeorm'

export class AppCreated1526628682783 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id"            integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "accountId"     integer,
                "credentialsId" integer,

                CONSTRAINT "REL_68d3c22dbd95449360fdbf7a3f" UNIQUE ("accountId"),
                CONSTRAINT "REL_9f92e2173d4e8d981fe96cfdec" UNIQUE ("credentialsId")
            )
        `)

        await queryRunner.query(`
            CREATE TABLE "credentials" (
                "id"       integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "login"    varchar                           NOT NULL,
                "password" varchar                           NOT NULL,

                CONSTRAINT "UQ_6188abc56326ea2aae47a70a0c6" UNIQUE ("login")
            )
        `)

        await queryRunner.query(`
            CREATE TABLE "account" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL
            )
        `)

        await queryRunner.query(`
            CREATE TABLE "transaction" (
                "id"        integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "accountId" integer
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "account"`)
        await queryRunner.query(`DROP TABLE "user"`)
        await queryRunner.query(`DROP TABLE "credentials"`)
        await queryRunner.query(`DROP TABLE "transaction"`)
    }

}
