
export class ErrorHandler extends Error {
    code: number;
    constructor(code: number, public readonly message: string | any) {
        super(message);
        this.code = code;
    }
}