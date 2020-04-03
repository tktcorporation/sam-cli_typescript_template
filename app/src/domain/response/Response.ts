import { Body, StringKeyObject } from "@src/domain/response/Body";
import { ValidationError } from "@src/domain/error/ValidationError";

export class Response {
    statusCode: number;
    body: string;

    constructor(
        statusCode: number,
        message?: string,
        contents?: StringKeyObject
    ) {
        this.statusCode = statusCode;
        this.body = new Body(message, contents).toJSONString();
    }

    static createForSuccess = (
        message?: string,
        contents?: StringKeyObject
    ): Response => new Response(Response.StatusCode.OK, message, contents);

    static createForCreated = (
        message?: string,
        contents?: StringKeyObject
    ): Response => new Response(Response.StatusCode.Created, message, contents);

    static createByAnyError = <T>(e: T): Response => {
        if (e instanceof ValidationError) {
            return new Response(e.statusCode, e.message);
        }
        return new Response(
            Response.StatusCode.InternalServerError,
            Response.Message.InternalServerError
        );
    };
}

export namespace Response {
    export enum StatusCode {
        OK = 200,
        Created = 201,
        InternalServerError = 500
    }
    export enum Message {
        InternalServerError = "Internal Server Error"
    }
}
