export abstract class BaseError extends Error {
    abstract statusCode: number;
    constructor(e?: string) {
        super(e);
        this.name = new.target.name;
        // Object.setPrototypeOf(this, new.target.prototype);
    }
}
