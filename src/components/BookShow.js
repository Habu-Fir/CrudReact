import React, { useState } from 'react';
import ShowEdit from './ShowEdit';
import { useContext } from 'react';
import BookContext from '../context/BookContext';

const BookShow = ({ book }) => {
  const { handleDeleteBookById } = useContext(BookContext);

  const [showEdit, setShowEdit] = useState(false);

  let content;
  const onSubmit = () => {
    setShowEdit(!showEdit);
  };

  const handleClick = () => {
    setShowEdit(true);
  };
  if (showEdit) {
    content = <ShowEdit book={book} onSubmit={onSubmit} />;
  }

  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '30%',
        padding: '20px',
        height: '20%',
        margin: '10px',
      }}
    >
      <img
        src={`https://picsum.photos/200/300?random=2`}
        alt="Avatar"
        style={{ width: '100%', height: '100%' }}
      ></img>
      <div style={{ padding: '2px 16px' }}>
        {book.title}
        <div style={{ marginLeft: '450px', display: 'flex' }}>
          <button
            style={{
              background: 'yellow',
              marginRight: '3px',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            Edit
          </button>

          <button
            style={{
              background: 'red',
              marginLeft: '3px',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
            onClick={() => {
              handleDeleteBookById(book.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {content}
    </div>
  );
};

export default BookShow;
