const ExternalService = require('../../services/external.service');
const TranslateHelper = require('../../helpers/translate.helper');


class FilmController {
    constructor() {
        this._externalService = new ExternalService();
        this._translateHelper = new TranslateHelper();
    }

    async getAll(req, res) {

        var { data } = await this._externalService.getAll('films');
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }

    async get(req, res) {
        const { id } = req.params;

        var { data } = await this._externalService.get('films', id);
        if (!data) {
            return res.status(404).send();
        }
        var film = await this._translateHelper.translate_string(data);
        return res.send(film);
    }

    async getSchema(req, res) {

        var { data } = await this._externalService.getSchema('films');
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }
}

module.exports = FilmController;