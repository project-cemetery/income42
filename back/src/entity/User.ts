import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    public id: number

    @Column({ type: 'varchar', unique: true })
    public login: string

    @Column('varchar')
    public password: string

}
