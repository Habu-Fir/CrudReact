import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { useContext, useEffect } from 'react';
import BookContext from './context/BookContext';

const App = () => {
  const { fetchBooks } = useContext(BookContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '2rem' }}>Creating Book</h1>
      <BookCreate />
      <BookList />
    </div>
  );
};

export default App;
