export interface IErrorHandler extends Error {
    code: number,
    message: string
}