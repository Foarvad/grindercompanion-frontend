import { observable, action } from 'mobx';


class SSE {
    @observable connections = {};

    @action
    subscribe = async ({ url, callback }) => {
        if (typeof url !== 'string' || typeof callback !== 'function') return;

        const eventSource = new EventSource(url);
        this.observable[url] = eventSource;

        eventSource.addEventListener('create', event => ({
            event: 'create',
            data: event.data,
        }));
        eventSource.addEventListener('read', event => ({
            event: 'read',
            data: event.data,
        }));
        eventSource.addEventListener('update', event => ({
            event: 'update',
            data: event.data,
        }));
        return true;
    }

    unsubscribe = async ({ url }) => {
        if (typeof url !== 'string') return;
        const connection = this.connections[url];

        if (connection instanceof EventSource) {
            connection.close();
            return true;
        }
        return false;
    }
}

export default new SSE();
