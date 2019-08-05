const request = require('supertest');
const app = require('../app');
const Memo = require('../model/memo');
const { bookOne, setupDatabase, memoOne } = require('./fixtures/db');

beforeEach(setupDatabase);

test('should make a memo to the book', async() => {
    const id = bookOne._id;
    const owner = bookOne.owner;
    const response = await request(app).post(`/book/${id}/memo`)
    .send({
        owner: owner,
        book_id: id,
        memo: "this is my memo",
    }).expect(201);

    const memo = await Memo.findById(response.body._id);

    expect(response.body_id).not.toBeNull();
    expect(memo.memo).toEqual('this is my memo');
})

test('should get memo of the book', async() => {
    const id = bookOne._id;
    const response = await request(app).get(`/book/${id}/memo`)
    .send()
    .expect(200);

    expect(response.body.length).toEqual(2);
})

test('delete memo', async() => {
    const _id = memoOne._id;
    const book_id = memoOne.book_id;

    await request(app).delete(`/book/${book_id}/${_id}`)
    .send()
    .expect(200);

})

