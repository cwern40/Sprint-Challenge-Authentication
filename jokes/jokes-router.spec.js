const server = require('../api/server');
const request = require('supertest');
const Auth = require('../auth/auth-model');
const db = require('../database/dbConfig');

describe('the /get model', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })

    it('should return status code of 401', async () => {
        const res = await request(server).get('/api/jokes');

        expect(res.status).toBe(401);
    });

    it('should return a message of "shall not pass!"', async () => {
        const res = await request(server).get('/api/jokes').set('Accept', 'application/json');

        expect(res.text).toEqual("{\"you\":\"shall not pass!\"}");

        // const userData = {
        //     "username": "test",
        //     "password": "test"};
        // const user = await request(server).post('/api/auth/register').set('Accept', 'application/json').send(userData);
        // const headers = user.text
        // expect(headers).toEqual(581268)
        // const res = await request(server).get('/api/jokes').set('Accept', 'application/json').set('authorization', headers);

        // expect(res.status).toBe(200);

    })
})