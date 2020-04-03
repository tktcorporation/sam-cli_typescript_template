import { BaseError } from "./BaseError";

export class NotExpectedError extends BaseError {
    statusCode: number = 500;
    constructor(e?: string) {
        super(e);
    }
}
