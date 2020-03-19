import { hello } from "../../src/index";
import { expect } from "chai";

const event = null,
    context = null;

describe("Hello test", () => {
    it("verifies successful response", async () => {
        const result = await hello(event, context);

        expect(result).to.be.an("object");
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an("string");

        const response = JSON.parse(result.body);

        expect(response).to.be.an("object");
        expect(response.message).to.be.equal("hello world");
    });
});
