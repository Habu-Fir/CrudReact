import axios from 'axios';
import { createContext, useState } from 'react';

const BookContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  const hadleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });

    const newBook = [...books, response.data];

    setBooks(newBook);
  };

  const handleDeleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const newData = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newData);
  };
  const onEditBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    onEditBookById,
    handleDeleteBookById,
    hadleCreateBook,
    fetchBooks,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
};

export { Provider };

export default BookContext;
