const UserBusiness = require('../domain/user.bussiness');


class UserService {
    constructor() {
        this._userBusiness = new UserBusiness();
    }

    async getAll() {
        const entities = await this._userBusiness.getAll();
        return entities;
    }
    async get(id) {
        const entity = await this._userBusiness.get(id);
        return entity;
    }
    async create(entity) {
        const createdEntity = await this._userBusiness.create(entity);
        return createdEntity;
    }
}

module.exports = UserService;