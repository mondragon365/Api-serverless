const Axios = require('axios')

class BaseService {
    constructor() {
    }
    async obtener(id) {
        const data = await Axios.get('https://swapi.dev/api/people/' + id + '/');
        return data;
    }
    async obtenerFilms(id) {
        const data = await Axios.get('https://swapi.dev/api/films/' + id + '/');
        return data;
    }
}

module.exports = BaseService;



