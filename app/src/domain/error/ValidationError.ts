import { BaseError } from "./BaseError";

export class ValidationError extends BaseError {
    statusCode: number = 400;
    constructor(e?: string) {
        super(e);
    }
}
