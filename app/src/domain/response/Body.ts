import { NotExpectedError } from "../error/NotExpectedError";

export interface StringKeyObject {
    [key: string]: string | number | null | undefined | StringKeyObject;
}

export class Body {
    message?: string;
    contents?: StringKeyObject;

    constructor(message?: string, contents?: StringKeyObject) {
        this.message = message;
        this.contents = contents;
    }

    toObject = () => {
        if (this.message && this.contents) {
            const contents = this.contents;
            contents.message = this.message;
            return contents;
        }
        if (this.message) return { message: this.message };
        if (this.contents) {
            delete this.contents.message;
            return this.contents;
        }
        throw new NotExpectedError(
            "Both of message and contents are undefined."
        );
    };

    toJSONString = () => JSON.stringify(this.toObject());
}
