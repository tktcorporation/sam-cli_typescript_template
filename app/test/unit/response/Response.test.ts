import { Response } from "@src/domain/response/Response";
import { ValidationError } from "@src/domain/error/ValidationError";
import { StringKeyObject } from "@src/domain/response/Body";

interface Greeting extends StringKeyObject {
    English: string;
    Japanese: string;
}
const greeting: Greeting = {
    English: "hello",
    Japanese: "こんにちは"
};

describe("Response initialize", () => {
    test("type of body is string", () => {
        const response = new Response(200, "response");
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe('{"message":"response"}');
    });
    test("response body has object", () => {
        const response = new Response(200, "greeting", greeting);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe(
            '{"English":"hello","Japanese":"こんにちは","message":"greeting"}'
        );
    });
    test("response body has object without message", () => {
        const response = new Response(200, undefined, greeting);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe(
            '{"English":"hello","Japanese":"こんにちは"}'
        );
    });
});

describe("Response handle", () => {
    test("success response", async () => {
        const response = Response.createForSuccess("success");
        expect(response.statusCode).toBe(200);
    });
    test("created response", async () => {
        const response = Response.createForCreated("created");
        expect(response.statusCode).toBe(201);
    });
    test("validation error", async () => {
        try {
            throw new ValidationError("any validation error mesage");
        } catch (e) {
            const response = Response.createByAnyError(e);
            expect(response.statusCode).toBe(400);
        }
    });
    test("internal server error", () => {
        try {
            throw new Error("any Error");
        } catch (e) {
            const response = Response.createByAnyError(e);
            expect(response.statusCode).toBe(500);
        }
    });
});
