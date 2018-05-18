// tslint:disable:max-line-length
// tslint:disable:quotemark
// tslint:disable:semicolon

import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddedCreatedAdToTransaction1526654685534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `transaction` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `transaction` CHANGE `amount` `amount` float NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `transaction` CHANGE `amount` `amount` float(12) NOT NULL");
        await queryRunner.query("ALTER TABLE `transaction` DROP COLUMN `createdAt`");
    }

}
