const AWS = require('aws-sdk');
const USERS_TABLE = 'users-table-dev';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class BaseRepository {
    constructor(db, entity) {
        this._db = db;
        this.entity = entity;
    }

    get(id) {
        const params = {
            TableName: USERS_TABLE,
            Key: {
                userId: id,
            },
        }
        return dynamoDb.get(params).promise();
    }

    create(entity) {
        const params = {
            TableName: USERS_TABLE,
            Item: {
                userId: entity.userId,
                name: entity.name,
                lastname: entity.lastname,
            },
        };
        return dynamoDb.put(params).promise();
    }
}

module.exports = BaseRepository;
