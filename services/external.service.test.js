
const ExternalService = require('./external.service');

const externalService = new ExternalService();

describe('External Service', () => {
    test('validate GetAll method', async () => {
        var result = await externalService.getAll('people');
        expect(result.status).toBe(200);
    });
    test('validate Get method', async () => {
        var result = await externalService.get('people', '1');
        expect(result.status).toBe(200);
    });
    test('validate GetSchema method', async () => {
        var result = await externalService.getSchema('people');
        expect(result.status).toBe(200);
    });
});