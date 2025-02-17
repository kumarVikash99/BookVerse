// import Book from '../model/book.model.js';

// export const getBook = async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.status(200).json(books);
//   } catch (error) {
//     console.error('Error fetching books:', error); // Detailed error logging
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// };

// /backend/controller/book.controller.js
import Book from '../model/book.model.js';

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json(error);
  }
};