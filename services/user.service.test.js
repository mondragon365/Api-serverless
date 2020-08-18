
const UserService = require('./user.service');

const userService = new UserService();
describe('User Service', () => {
    test('validate Create method', async () => {
        var result = await userService.create({
            "userId": "1001-service.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
        expect(result).toStrictEqual({});
    });
    test('validate GetAll method', async () => {
        var result = await userService.getAll();
        expect(result).toContainEqual({
            "userId": "1001-service.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
    });
    test('validate Get method', async () => {
        var result = await userService.get("1001-service.test");
        expect(result).toEqual({
            "userId": "1001-service.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
    });
});