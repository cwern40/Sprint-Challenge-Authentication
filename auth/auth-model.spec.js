const Auth = require('./auth-model');
const server = require('../api/server');
const request = require('supertest');
const db = require('../database/dbConfig');

describe('the authentication model', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('The registration model', () => {

        it('should return an object', async () => {
            const userData = { username: 'test', password: 'test'};
            const user = await Auth.add(userData);

            expect(user.length).toBe(1);
        })

        it('should return index of 1', async () => {
            const userData = { username: "John", password: "test"};
            const user = await Auth.add(userData)

            expect(user).toEqual([1]);
        })
    })
})