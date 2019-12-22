import Cookies from './../Cookies';
import LocalStorage from './../LocalStorage';


class StorageFacade {
    constructor({ CookiesService, LocalStorageSerivce }) {
        this.cookies = CookiesService;
        this.storage = LocalStorageSerivce;
    }

    getCookie = ({ ...args }) => this.cookies.get(args);

    setCookie = ({ ...args }) => this.cookies.set(args);

    deleteCookie = ({ ...args }) => this.cookies.delete(args);

    getLocal = ({ ...args }) => this.storage.get(args);

    setLocal = ({ ...args }) => this.storage.set(args);

    deleteLocal = ({ ...args }) => this.storage.delete(args);

    localKey = ({ ...args }) => this.storage.key(args);

    allLocal = () => this.storage.all();

    clearLocal = () => this.storage.clear();

    localLength = () => this.storage.length();
}

export default new StorageFacade({ CookiesService: Cookies, LocalStorageSerivce: LocalStorage });
