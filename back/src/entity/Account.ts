import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import Transaction from './Transaction'
import User from './User'

@Entity()
export default class Account {

    @PrimaryGeneratedColumn()
    public id: number

    @OneToMany((type) => Transaction, (transaction) => transaction.account)
    public transactions: Transaction[]

    @OneToOne((type) => User, (user) => user.account)
    public user: User
}
