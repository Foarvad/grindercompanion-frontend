import superagent from 'superagent';


export class HTTP {
    constructor({ httpService }) {
        this.http = httpService;
    }

    post = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .post(url, data)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    get = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .get(url, data)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    put = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .put(url, data)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    patch = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .patch(url, data)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    delete = ({ url, data }) => {
        return new Promise((resolve, reject) => {
            this.http
                .del(url, data)
                .end(this.handleEnd({ resolve, reject }));
        });
    }

    handleEnd = ({ resolve, reject }) => (err, res) => {
        if (err)
            reject(err);
        else
            resolve({
                data: res.body,
                meta: {
                    ...res,
                    ...{
                        body: undefined,
                    },
                },
            });
    }
}


export default new HTTP({ httpService: superagent });
