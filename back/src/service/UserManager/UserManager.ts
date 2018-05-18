import { User } from '../../entity'

export default interface UserManagerInterface {
    checkCredentials(user: User, password: string): boolean
    createUser(login: string, password: string): User
}
