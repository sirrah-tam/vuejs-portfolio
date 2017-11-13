import axios from 'axios'

export default class Request {
	constructor () {
        axios.defaults.headers.common = {
            'X-Requested-With': 'XMLHttpRequest'
        }

        this.instance = axios.create({

        })
    }

    /**
     * Send a GET request to the given path.
     *
     * @param {string} path
     * @param {object} data
     * @param {object} config
     */
    get (path, data = {}, config = {}) {
        return new Promise((resolve, reject) => {
            this.instance
                .get(path, data, config)
                .then(response => {
                    resolve(response.data)
                })
                .catch(errors => {
                    reject(errors)
                })
        })
    }
}
