const Auth = require('./auth-model');
const db = require('../database/dbConfig');

describe('the authentication model', () => {

    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('The registration model', () => {

        it('should return an object', async () => {
            const userData = { username: 'test', password: 'test'};
            const user = await Auth.add(userData);

            expect(user.length).toBe(1);
        });

        it('should return index of 1', async () => {
            const userData = { username: "John", password: "test"};
            const user = await Auth.add(userData)

            expect(user).toEqual([1]);
        });
    })

    describe('the login model', () => {

        it('should return an object', async () => {
            const userData = { username: "John", password: "test"};
            const { username, password } = userData;
            const user = await Auth.add(userData);
            const login = await Auth.findBy({ username })

            expect(login.length).toBe(1);
        })

        it('Should return user data', async () => {
            const userData = { username: "John", password: "test"};
            const { username, password } = userData;
            const user = await Auth.add(userData);
            const login = await Auth.findBy({ username })

            expect(login[0]).toEqual({ id: 1, username: 'John', password: "test"});
        })
    })
})