// tslint:disable:max-line-length
// tslint:disable:quotemark
// tslint:disable:semicolon

import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitalSchema1526640549748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `transaction` (`id` int NOT NULL AUTO_INCREMENT, `amount` float NOT NULL, `source` varchar(255) NOT NULL, `accountId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `credentials` (`id` int NOT NULL AUTO_INCREMENT, `login` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_6188abc56326ea2aae47a70a0c` (`login`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `accountId` int NULL, `credentialsId` int NULL, UNIQUE INDEX `REL_68d3c22dbd95449360fdbf7a3f` (`accountId`), UNIQUE INDEX `REL_9f92e2173d4e8d981fe96cfdec` (`credentialsId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `account` (`id` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `transaction` ADD CONSTRAINT `FK_3d6e89b14baa44a71870450d14d` FOREIGN KEY (`accountId`) REFERENCES `account`(`id`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_68d3c22dbd95449360fdbf7a3f1` FOREIGN KEY (`accountId`) REFERENCES `account`(`id`)");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9f92e2173d4e8d981fe96cfdec9` FOREIGN KEY (`credentialsId`) REFERENCES `credentials`(`id`)");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9f92e2173d4e8d981fe96cfdec9`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_68d3c22dbd95449360fdbf7a3f1`");
        await queryRunner.query("ALTER TABLE `transaction` DROP FOREIGN KEY `FK_3d6e89b14baa44a71870450d14d`");
        await queryRunner.query("DROP TABLE `account`");
        await queryRunner.query("DROP INDEX `REL_9f92e2173d4e8d981fe96cfdec` ON `user`");
        await queryRunner.query("DROP INDEX `REL_68d3c22dbd95449360fdbf7a3f` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP INDEX `IDX_6188abc56326ea2aae47a70a0c` ON `credentials`");
        await queryRunner.query("DROP TABLE `credentials`");
        await queryRunner.query("DROP TABLE `transaction`");
    }

}
