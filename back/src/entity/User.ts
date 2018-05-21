import {
    Column, Entity,
    JoinColumn, OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'

import { Account, Credentials } from '@app/entity'

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    public id: number

    @OneToOne((type) => Account, (account) => account.user, { cascade: true })
    @JoinColumn()
    public account: Account

    @OneToOne((type) => Credentials, (credentials) => credentials.user, { cascade: true })
    @JoinColumn()
    public credentials: Credentials
}
