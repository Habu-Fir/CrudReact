import React from 'react';
import BookShow from './BookShow';
import { useContext } from 'react';
import BookContext from '../context/BookContext';

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div style={{ display: 'grid', gridColumn: '2' }}>
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
