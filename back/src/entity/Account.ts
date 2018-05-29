import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Transaction, User } from '@income42/entity'

@Entity()
export default class Account {

    @PrimaryGeneratedColumn()
    public id: number

    @OneToMany((type) => Transaction, (transaction) => transaction.account)
    public transactions: Transaction[]

    @OneToOne((type) => User, (user) => user.account)
    public user: User
}
