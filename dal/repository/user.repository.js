const AWS = require('aws-sdk');
const USERS_TABLE = 'users-table-devv';
const dynamoDb = new AWS.DynamoDB.DocumentClient({ 'region': 'us-west-2' });

class UserRepository {
    constructor(db, entity) {
        this._db = db;
        this.entity = entity;
    }

    getAll() {
        const params = {
            TableName: USERS_TABLE
        }
        return dynamoDb.scan(params).promise();
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

module.exports = UserRepository;
