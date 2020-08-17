const mapper = require("automapper-js");
const UserRepository = require('../dal/repository/user.repository');
const User = require('./model/user');

class BaseBusiness {
    constructor() {
        this._userRepository = new UserRepository();
        this.entityToMap = User;
    }

    async get(id) {
        const entity = await this._userRepository.get(id);
        if (!entity.Item) return null;
        return mapper(this.entityToMap, entity.Item);
    }

    async create(entity) {
        entity = mapper(this.entityToMap, entity);
        const createdEntity = await this._userRepository.create(entity);
        return createdEntity;
    }
}

module.exports = BaseBusiness;