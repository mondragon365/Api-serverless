const ExternalService = require('../../services/external.service');
const TranslateHelper = require('../../helpers/translate.helper');


class PlanetController {
    constructor() {
        this._externalService = new ExternalService();
        this._translateHelper = new TranslateHelper();
    }

    async getAll(req, res) {

        var { data } = await this._externalService.getAll('planets');
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }

    async get(req, res) {
        const { id } = req.params;

        var { data } = await this._externalService.get('planets', id);
        if (!data) {
            return res.status(404).send();
        }
        var film = await this._translateHelper.translate_string(data);
        return res.send(film);
    }

    async getSchema(req, res) {

        var { data } = await this._externalService.getSchema('planets');
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }
}

module.exports = PlanetController;