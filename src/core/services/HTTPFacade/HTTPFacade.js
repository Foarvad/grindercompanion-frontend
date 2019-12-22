import HTTP from './../HTTP';
import SSE from './../SSE';


class HTTPFacade {
    constructor({ HTTPService, SSEService }) {
        this.HTTP = HTTPService;
        this.SSE = SSEService;
    }

    post = ({ ...args }) => this.HTTP.post(args);

    get = ({ ...args }) => this.HTTP.get(args);

    put = ({ ...args }) => this.HTTP.put(args);

    patch = ({ ...args }) => this.HTTP.patch(args);

    delete = ({ ...args }) => this.HTTP.delete(args);

    subscribe = ({ ...args }) => this.SSE.subscribe(args);

    unsubscribe = ({ ...args }) => this.SSE.unsubscribe(args);
}

export default new HTTPFacade({ HTTPService: HTTP, SSEService: SSE });
