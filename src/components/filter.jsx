import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Filter = () => {
  const [filter, setFilter] = useState('all');
  const books = useSelector((state) => state.books.books);

  const filteredBooks =
    filter === 'all'
      ? books
      : books.filter((book) => book.isRead === (filter === 'read'));

  return (
    <div>
      <div>
        <label htmlFor="filter"><h3>Filter Books: </h3></label>
        <select
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
      </div>
      <div className="book-list">
        {filteredBooks.length === 0 ? (
          <p>No books to display for the selected filter.</p>
        ) : (
          filteredBooks.map((book) => (
            <Card key={book.id} sx={{ width: 345 }}>
            <CardContent>
            <h3>{book.title}</h3>
            <p className='details'><strong>Author:</strong> {book.author}</p>
            <p className='details'><strong>Status:</strong> {book.isRead ? 'Read' : 'Unread'}</p>
            </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Filter;
