const request = require('supertest');
const app = require('../app');
const Book = require('../model/books');
const { userOne , bookOne, bookThree, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);


test('should register book', async() => {
    const userId = userOne._id;
    const response = await request(app).post('/book').send({
        title: 'Medi care',
        genre: 'Health',
        author: 'someone',
        page_nums: '100',
        owner: userId
    }).expect(201)

    const book = await Book.findById(response.body._id);
    expect(book).not.toBeNull();

    expect(book.title).toEqual('Medi care');
    expect(book.genre).toEqual('Health');
    expect(book.author).toEqual('someone');
    expect(book.page_nums).toEqual(100);
})

test('should not register book', async() => {
    const userId = userOne._id;
    let response = await request(app).post('/book').send({
        genre: 'Health',
        author: 'someone',
        page_nums: '100',
        owner: userId
    }).expect(200)

    book = await Book.findById(response.body._id);
    expect(book).toBeNull();

    response = await request(app).post('/book').send({
        title: 'Medi care',
        author: 'someone',
        page_nums: '100',
        owner: userId
    }).expect(200)

    book = await Book.findById(response.body._id);
    expect(book).toBeNull();

    response = await request(app).post('/book').send({
        title: 'Medi care',
        genre: 'Health',
        page_nums: '100',
        owner: userId
    }).expect(200)

    book = await Book.findById(response.body._id);
    expect(book).toBeNull();

    response = await request(app).post('/book').send({
        title: 'Medi care',
        genre: 'Health',
        author: 'someone',
        owner: userId
    }).expect(200)

    book = await Book.findById(response.body._id);
    expect(book).toBeNull();
})



test('should get book info', async() => {
    const id = bookOne._id;

    await request(app)
        .get(`/book/${id}`)
        .send()
        .expect(200);


    const book = await Book.findById(id);
    expect(book.title).toEqual(bookOne.title);
    expect(book.genre).toEqual(bookOne.genre);
    expect(book.author).toEqual(bookOne.author);
    expect(book.page_nums).toEqual(bookOne.page_nums);
})

test('should get book info', async() => {
    await request(app)
        .get(`/book/12345`)
        .send()
        .expect(500);
})


test('should get user\'s books', async() => {
    const owner = userOne._id;
    const response = await request(app).get(`/books/${owner}`).send().expect(200);
    expect(response.body.length).toEqual(2);
})

test('should not get user\'s books', async() => {
    const response = await request(app).get(`/books/123456`).send().expect(200);
    expect(response.body.length).toBe(0);
})

test('should delete a book', async() => {
    const _id = bookThree._id;

    book_before = await Book.findById(_id);
    expect(book_before).not.toBeNull();

    await request(app).delete(`/book/${_id}`).send().expect(200);
    book_after = await Book.findById(_id);
    expect(book_after).toBeNull();
})

test('should update an evaluation of the book', async() => {
    const id = bookOne._id;
    await request(app)
        .patch(`/book/${id}/evaluation`)
        .send({evaluation: 3})
        .expect(200);

    const book = await Book.findById(id);
    expect(book.evaluation).toEqual(3);
})

test('should update read pages', async() => {
    const id = bookOne._id;
    await request(app)
        .patch(`/book/${id}/read_pages`)
        .send({read_pages: 100})
        .expect(200);

    const book = await Book.findById(id);
    expect(book.read_pages).toEqual(100);
})

test('should update image url', async() => {
    const id = bookOne._id;
    await request(app)
        .patch(`/book/upload/${id}`)
        .send({imageUrl: 'http://sample.com'})
        .expect(200);

    const book = await Book.findById(id);
    expect(book.imageUrl).toEqual('http://sample.com');

})

