import { Body, StringKeyObject } from "@src/domain/response/Body";
import { NotExpectedError } from "@src/domain/error/NotExpectedError";

interface Greeting extends StringKeyObject {
    English: string;
    Japanese: string;
}
const greeting: Greeting = {
    English: "hello",
    Japanese: "こんにちは"
};

describe("Body toJSONString", () => {
    test("toJSONString", () => {
        const body = new Body("say", greeting);
        expect(body.toJSONString()).toBe(
            '{"English":"hello","Japanese":"こんにちは","message":"say"}'
        );
    });
    test("toJSONString only message", () => {
        const body = new Body("response");
        expect(body.toJSONString()).toBe('{"message":"response"}');
    });
    test("toJSONString without message", () => {
        const body = new Body(undefined, greeting);
        expect(body.toJSONString()).toBe(
            '{"English":"hello","Japanese":"こんにちは"}'
        );
    });
});
describe("Body toObject", () => {
    test("toObject", () => {
        const body = new Body("say", greeting);
        expect(body.toObject()).toMatchObject({
            English: "hello",
            Japanese: "こんにちは",
            message: "say"
        });
    });
    test("toObject only message", () => {
        const body = new Body("response");
        expect(body.toObject()).toMatchObject({ message: "response" });
    });
    test("toObject without message", () => {
        const body = new Body(undefined, greeting);
        expect(body.toObject()).toMatchObject({
            English: "hello",
            Japanese: "こんにちは"
        });
    });
    test("toObject with NotExpectedError", () => {
        const body = new Body(undefined, undefined);
        expect(body.toObject).toThrow(NotExpectedError);
    });
});
