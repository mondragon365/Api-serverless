
const UserRepository = require('./user.repository');

const userRepository = new UserRepository();
describe('User Repository', () => {
    test('validate Create method', async () => {
        var result = await userRepository.create({
            "userId": "1001-repository.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
        expect(result).toStrictEqual({});
    });
    test('validate GetAll method', async () => {
        var result = await userRepository.getAll();
        expect(result.Items).toContainEqual({
            "userId": "1001-repository.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
    });
    test('validate Get method', async () => {
        var result = await userRepository.get("1001-repository.test");
        expect(result.Item).toEqual({
            "userId": "1001-repository.test",
            "name": "Wiston Mathew",
            "lastname": "Mckenna"
        });
    });
});