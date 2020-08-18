const mapper = require("automapper-js");

const ExternalService = require('../../services/external.service');
const TranslateHelper = require('../../helpers/translate.helper');
const UserService = require('../../services/user.service');

const UserDto = require("../dto/user.dto");

class UserController {
    constructor() {
        this._externalService = new ExternalService();
        this._translateHelper = new TranslateHelper();
        this._userService = new UserService();
    }

    async getAll(req, res) {
        var users = await this._userService.getAll();
        users = mapper(UserDto, users);
        return res.json(users);
    }

    async get(req, res) {
        const { id } = req.params;
        var user = await this._userService.get(id);
        user = mapper(UserDto, user);
        return res.json(user);
    }

    async create(req, res) {
        const { body } = req;
        const createdUser = await this._userService.create(body);
        return res.json(createdUser);
    }
}

module.exports = UserController;