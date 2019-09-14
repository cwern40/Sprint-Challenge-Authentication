const Auth = require('./auth-model');
const server = require('../api/server');
const request = require('supertest');
const db = require('../database/dbConfig');

describe('the authentication model', () => {

    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    describe('The registration model', () => {

        it('should return status code of 201', async () => {
            const userData = { name: 'test', password: 'test'};
            const user = await request(server).post('/api/registration', userData);

            expect(res.status.toBe(201));
        })
    })
})