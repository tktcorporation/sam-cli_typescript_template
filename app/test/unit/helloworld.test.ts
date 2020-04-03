import { hello, Api } from "@src/index";

const event = null,
    context = null;

describe("Hello test", () => {
    test("verifies successful response", async () => {
        expect(hello).toBeInstanceOf(Function);

        const result = await hello(event, context);

        expect(result).toBeInstanceOf(Object);
        expect(result.statusCode).toBe(200);
        expect(result.body).toBe('{"message":"hello world"}');

        const response = JSON.parse(result.body);

        expect(response).toBeInstanceOf(Object);
        expect(response.message).toBe("hello world");
    });
});
