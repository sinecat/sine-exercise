import {ENCRYPTED_ACTIVATION_CODE} from "../constant";
// @ts-ignore
import bcrypt from 'bcryptjs'

const hashCode = async (password: string, saltRounds = 7) => {
    try {
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        throw new Error("Hashing failed");
    }
}

const verifyCode = async (password:string, _currentCode = ENCRYPTED_ACTIVATION_CODE) => {
    try {
        const result = await bcrypt.compare(password, _currentCode);
        if (result) {
            const ciphertext = await hashCode(password)
            localStorage && localStorage.setItem('token', ciphertext)
        }
        return result
    } catch (error) {
    }
}

export {
    hashCode,
    verifyCode
}
