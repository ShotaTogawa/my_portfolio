const mongoose = require('mongoose');
const User = require('../../model/user');
const Book = require('../../model/books');
const Memo = require('../../model/memo');


const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id: userOneId,
    name: "mike",
    email: "mike@test.com",
}

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id: userTwoId,
    name: "tom",
    email: "tom@test.com",
}

const bookOne = {
    _id: new mongoose.Types.ObjectId(),
    title: "Book1",
    genre: "Computer Tecnology",
    author: "Java",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-e7b33.appspot.com/o/books%2Fimages%2Fdefault%2Fimage.png?alt=media&token=76580ae4-2f31-45ac-96bc-bd141697e049",
    page_nums: 300,
    read_pages: '',
    startDate: '',
    endDate: '',
    owner: userOne._id,
    status:  "beforeReading",
    evaluation:  0
}

const bookTwo = {
    _id: new mongoose.Types.ObjectId(),
    title: "Book2",
    genre: "JK Rollings",
    author: "Harry Potter",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-e7b33.appspot.com/o/books%2Fimages%2Fdefault%2Fimage.png?alt=media&token=76580ae4-2f31-45ac-96bc-bd141697e049",
    page_nums: 300,
    read_pages: '',
    startDate: '',
    endDate: '',
    owner: userOne._id,
    status:  "beforeReading",
    evaluation:  0
}

const bookThree = {
    _id: new mongoose.Types.ObjectId(),
    title: "Book3",
    genre: "Fitness",
    author: "Gold Gym",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-e7b33.appspot.com/o/books%2Fimages%2Fdefault%2Fimage.png?alt=media&token=76580ae4-2f31-45ac-96bc-bd141697e049",
    page_nums: 300,
    read_pages: '',
    startDate: '',
    endDate: '',
    owner: userTwo._id,
    status:  "beforeReading",
    evaluation:  0
}

const memoOne = {
    _id: new mongoose.Types.ObjectId(),
    owner: userOne._id,
    book_id: bookOne._id,
    memo: 'learned Syntax'
}

const memoTwo = {
    _id: new mongoose.Types.ObjectId(),
    owner: userOne._id,
    book_id: bookOne._id,
    memo: 'Learned class method'
}


const setupDatabase = async() => {
    await User.deleteMany();
    await Book.deleteMany();
    await Memo.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Book(bookOne).save();
    await new Book(bookTwo).save();
    await new Book(bookThree).save();
    await new Memo(memoOne).save();
    await new Memo(memoTwo).save();
}

module.exports = {
    userOne,
    userTwo,
    bookOne,
    bookTwo,
    bookThree,
    memoOne,
    memoTwo,
    setupDatabase
}