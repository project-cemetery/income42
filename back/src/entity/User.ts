import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string

}
