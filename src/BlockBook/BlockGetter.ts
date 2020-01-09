import fs from "fs"
import path from "path"
import logger from "../Common/logger";

const MAX_HEIGHT = 1000;

export default class Blocks implements Iterable<any> {
    private height: Number = 1;

    public [Symbol.iterator]() {
        return {
            next: function (): IteratorResult<any> {
                return {
                    done: this.height > MAX_HEIGHT,
                    value: this.getBlock(this.height++)
                }
            }.bind(this)
        }
    }

    private getBlock(height: Number) {
        try {
            let rawdata = fs.readFileSync(path.join(__dirname, `./demoData/${height}.json`));
            return JSON.parse(rawdata.toString());
        } catch (error) {
            logger.error(error)
            return null
        }
    }
}
