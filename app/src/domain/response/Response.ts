import { Body } from "./Body";

export class Response {
    statusCode: number;
    body: string;

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.body = new Body(message).toString();
    }
}
