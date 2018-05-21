import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

import { Transaction, User } from '../entity'

@Entity()
export default class Credentials {

    @PrimaryGeneratedColumn()
    public id: number

    @OneToOne((type) => User, (user) => user.credentials)
    public user: User

    @Column({ type: 'varchar', unique: true })
    public login: string

    @Column('varchar')
    public password: string
}
