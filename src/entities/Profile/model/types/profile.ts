import { Currency } from '@/entities/Currency'
import { Countries } from '@/entities/Country'
import { ValidateProfileErrors } from '../consts/consts'
import { UserRole} from "@/entities/User";

export interface Profile {
    id?: string
    avatar?: string
    firstname?: string
    lastname?: string
    age?: number | string
    currency?: Currency
    country?: Countries
    city?: string
    username?: string
    userId?: string
    roles?: UserRole[]
}

export type ValidateProfileErrorsType =
    (typeof ValidateProfileErrors)[keyof typeof ValidateProfileErrors]

export type ValidateErrors = {
    firstname: ValidateProfileErrorsType[]
    lastname: ValidateProfileErrorsType[]
    age: ValidateProfileErrorsType[]
    city: ValidateProfileErrorsType[]
    username: ValidateProfileErrorsType[]
    currency: ValidateProfileErrorsType[]
    country: ValidateProfileErrorsType[]
    data: ValidateProfileErrorsType[]
}
export interface ProfileSchema {
    authData?: Profile
}