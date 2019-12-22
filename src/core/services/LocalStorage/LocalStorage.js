import { tryCatchAsync } from '@lib';


class LocalStorage {
    constructor({ localStorageService }) {
        this.storage = localStorageService;
    }

    get = ({ key }) => {
        return tryCatchAsync(() => this.storage.getItem(key));
    };

    set = ({ key, value }) => {
        return tryCatchAsync(() => {
            this.storage.setItem(key, value);
            return true;
        });
    }

    delete = ({ key }) => {
        return tryCatchAsync(() => {
            this.storage.removeItem(key);
            return true;
        });
    }

    key = ({ index }) => {
        return tryCatchAsync(() => this.storage.key(index));
    }

    all = () => {
        return tryCatchAsync(async () => {
            const res = {};
            for (let index = 0, l = await this.length(); index < l; index++) {
                const key = await this.key({ index });
                res[key] = await this.get({ key });
            }
            return res;
        });
    }

    clear = () => {
        return tryCatchAsync(() => {
            this.storage.clear();
            return true;
        });
    }

    length = () => {
        return tryCatchAsync(() => this.storage.length);
    }
}

export default new LocalStorage({ localStorageService: localStorage });
