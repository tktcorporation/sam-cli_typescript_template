export class Body {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    toString = () => JSON.stringify(this);
}
