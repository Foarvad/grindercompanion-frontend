import JSCookies from 'js-cookie';

import { tryCatchAsync } from '@lib';


class Cookies {
    constructor({ cookiesService }) {
        this.cookies = cookiesService;
    }

    get = ({ key }) => {
        return tryCatchAsync(() => this.cookies.get(key));
    }

    set = ({ key, value }) => {
        return tryCatchAsync(() => {
            this.cookies.set(key, value);
            return true;
        });
    }

    delete = ({ key }) => {
        return tryCatchAsync(() => {
            this.cookies.remove(key);
            return true;
        });
    }
}

export default new Cookies({ cookiesService: JSCookies });
