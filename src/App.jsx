import { useState } from 'react';
import './App.css';
import BooksComponent from './components/booksComponent';
import ViewBooksComponent from './components/viewBooksComponent';
import Filter from './components/filter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '20px' }}>
      <h1>Book Management Application</h1>
      <BooksComponent />
      <hr />
      <h3>Total Books</h3>
      <ViewBooksComponent />
      <hr />
      <Filter />
    </div>
    </>
  )
}

export default App
