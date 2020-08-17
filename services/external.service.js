const Axios = require('axios')

class ExternalService {
    constructor() {
    }
    async getAll(resource, id) {
        var data = null;
        try {
            data = await Axios.get('https://swapi.dev/api/' + resource + '/');
        } catch (error) {
        }
        return data;
    }
    async get(resource, id) {
        var data = null;
        try {
            data = await Axios.get('https://swapi.dev/api/' + resource + '/' + id + '/');
        } catch (error) {
        }
        return data;
    }
    async getSchema(resource) {
        var data = null;
        try {
            data = await Axios.get('https://swapi.dev/api/' + resource + '/schema');
        } catch (error) {
        }
        return data;
    }
}

module.exports = ExternalService;