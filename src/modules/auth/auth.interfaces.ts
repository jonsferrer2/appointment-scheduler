
export interface IRegisterInput {
    email: string,
    firstName: string,
    lastName: string,
    middleName?: string,
    password: string
}

export interface IMemberRegisterInput {
    firstName: string,
    lastName: string,
    middleName?: string,
    suffix?: string,
    mobileNumber: string,
    email: string,
}