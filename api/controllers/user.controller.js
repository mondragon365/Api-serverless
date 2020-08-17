const mapper = require("automapper-js");
const UserDto = require("../dto/user.dto");


const AWS = require('aws-sdk');

const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient();


const ExternalService = require('../../services/external.service');
const TranslateHelper = require('../../helpers/translate.helper');
const UserBusiness = require('../../services/user.service');


class UserController {
    constructor() {
        this._externalService = new ExternalService();
        this._translateHelper = new TranslateHelper();
        this._UserBusiness = new UserBusiness();
    }

    async getAll(req, res) {

        var { data } = await this._externalService.getAll('films');
        if (!data) {
            return res.status(404).send();
        }
        var person = await this._translateHelper.translate_string(data);
        return res.send(person);
    }
    //
    async get(req, res) {
        const { id } = req.params;

        var user = await this._UserBusiness.get(id);
        user = mapper(UserDto, user);
        return res.json(user);
    }

    async create(req, res) {
        const { body } = req;
        const createdUser = await this._UserBusiness.create(body);
        //const user = mapper(UserDto, createdUser);
        return res.json(createdUser);
    }
    //


    // async get(req, res) {
    //     const { id } = req.params;

    //     const params = {
    //         TableName: USERS_TABLE,
    //         Key: {
    //             userId: id,
    //         },
    //     }

    //     dynamoDb.get(params, (error, result) => {
    //         if (error) {
    //             console.log(error);
    //             res.status(400).json({ error: 'Could not get user' });
    //         }
    //         if (result.Item) {
    //             const { userId, name } = result.Item;
    //             res.json({ userId, name });
    //         } else {
    //             res.status(404).json({ error: "User not found" });
    //         }
    //     });

    //     // var { data } = await this._externalService.get('films', id);
    //     // if (!data) {
    //     //     return res.status(404).send();
    //     // }
    //     // var film = await this._translateHelper.translate_string(data);
    //     // return res.send(film);
    // }

    // async post(req, res) {

    //     const { userId, name, lastname } = req.body;
    //     if (typeof userId !== 'string') {
    //         res.status(400).json({ error: '"userId" must be a string' });
    //     } else if (typeof name !== 'string') {
    //         res.status(400).json({ error: '"name" must be a string' });
    //     }

    //     const params = {
    //         TableName: USERS_TABLE,
    //         Item: {
    //             userId: userId,
    //             name: name,
    //             lastname: lastname,
    //         },
    //     };

    //     dynamoDb.put(params, (error) => {
    //         if (error) {
    //             console.log(error);
    //             res.status(400).json({ error: 'Could not create user' });
    //         }
    //         res.json({ userId, name });
    //     });
    // }
}

module.exports = UserController;