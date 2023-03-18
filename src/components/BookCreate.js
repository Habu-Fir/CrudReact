import React, { useState } from 'react';
import BookContext from '../context/BookContext';
import { useContext } from 'react';

const BookCreate = () => {
  const { hadleCreateBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    hadleCreateBook(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{
          width: '20%',
          padding: '12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        value={title}
        onChange={handleChange}
      />
      <div style={{ paddingTop: '10px' }}>
        <button
          style={{
            background: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Create!
        </button>
      </div>
    </form>
  );
};

export default BookCreate;
