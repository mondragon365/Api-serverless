const mapper = require("automapper-js");

const ExternalService = require('../../services/external.service');
const TranslateHelper = require('../../helpers/translate.helper');
const UserBusiness = require('../../services/user.service');

const UserDto = require("../dto/user.dto");

class UserController {
    constructor() {
        this._externalService = new ExternalService();
        this._translateHelper = new TranslateHelper();
        this._UserBusiness = new UserBusiness();
    }

    async getAll(req, res) {
        var users = await this._UserBusiness.getAll();
        users = mapper(UserDto, users);
        return res.json(users);
    }

    async get(req, res) {
        const { id } = req.params;
        var user = await this._UserBusiness.get(id);
        user = mapper(UserDto, user);
        return res.json(user);
    }

    async create(req, res) {
        const { body } = req;
        const createdUser = await this._UserBusiness.create(body);
        return res.json(createdUser);
    }
}

module.exports = UserController;