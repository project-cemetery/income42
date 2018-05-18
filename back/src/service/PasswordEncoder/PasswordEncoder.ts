export default interface PasswordEncoder {
    encode(password: string, salt?: string): string

    compare(hash: string, password: string, salt?: string): boolean
}
