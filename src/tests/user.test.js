const request = require('supertest');
const app = require('../app');
const { userOne ,setupDatabase } = require('./fixtures/db');


beforeEach(setupDatabase);

test('should signup a user', async() => {
    const response = await request(app).post('/user').send({
        name: "apple",
        email: "apple@test.com"
    }).expect(201);

    expect(response.body).toMatchObject({
        user: {
            name: "apple",
            email: "apple@test.com"
        }
    });
})

test('get user information', async () => {
    const userId = userOne._id;
    await request(app).get(`/user/${userId}`).send().expect(200);
})