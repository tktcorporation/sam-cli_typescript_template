import { Response } from "./domain/response/Response";

export type Api = (
    event: any,
    context: any,
    callback?: any
) => Promise<Response>;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
export const hello: Api = async (event: any, context: any) => {
    try {
        return new Response(200, "hello world");
    } catch (err) {
        return new Response(500, "Internal Server Error");
    }
};
