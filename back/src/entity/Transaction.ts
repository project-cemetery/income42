import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import Account from './Account'

@Entity()
export default class Transaction {

    @PrimaryGeneratedColumn()
    public id: number

    @ManyToOne((type) => Account, (account) => account.transactions)
    public account: Account

    @Column('float')
    public amount: number

    @Column('varchar')
    public source: string

}
