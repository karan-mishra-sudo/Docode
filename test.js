//import { validatePassword, hashPassword } from "password-hashing"
const hashpwd =require('password-hashing')

const { hash, salt } = hashpwd.hashPassword("YOUR PASSWORD")

const isValid = hashpwd.validatePassword("YOUR PASSWORD", salt, hash)