import React, { useState } from 'react';
import { useContext } from 'react';
import BookContext from '../context/BookContext';

const ShowEdit = ({ book, onSubmit }) => {
  const { onEditBookById } = useContext(BookContext);
  const [editTitle, setEditTitle] = useState(book.title);
  const handleEditChange = (e) => {
    setEditTitle(e.target.value);
  };
  const hanleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    onEditBookById(book.id, editTitle);
  };

  return (
    <form onSubmit={hanleSubmit}>
      <input value={editTitle} onChange={handleEditChange} />
      <button>save</button>
    </form>
  );
};

export default ShowEdit;
