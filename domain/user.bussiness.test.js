
const UserBussiness = require('./user.bussiness');

const userBussiness = new UserBussiness();
describe('User Bussiness', () => {
    test('validate Create method', async () => {
        var result = await userBussiness.create({
            "userId": "1001-bussiness.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
        expect(result).toStrictEqual({});
    });
    test('validate GetAll method', async () => {
        var result = await userBussiness.getAll();
        expect(result).toContainEqual({
            "userId": "1001-bussiness.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
    });
    test('validate Get method', async () => {
        var result = await userBussiness.get("1001-bussiness.test");
        expect(result).toEqual({
            "userId": "1001-bussiness.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
    });
});