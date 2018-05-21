import * as bcrypt from 'bcrypt-nodejs'
import { injectable } from 'inversify'

import { PasswordEncoder } from '@app/service'

@injectable()
export default class BcryptPasswordEncoder implements PasswordEncoder {
    public encode(password: string) {
        return bcrypt.hashSync(password)
    }

    public compare(hash: string, password: string) {
        return bcrypt.compareSync(password, hash)
    }
}
