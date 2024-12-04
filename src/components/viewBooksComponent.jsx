import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleReadStatus } from '../redux/booksSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const ViewBooksComponent = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleToggleRead = (id) => {
    dispatch(toggleReadStatus(id));
  };

  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books available. Add some books!</p>
      ) : (
        books.map((book) => (
          <Card key={book.id} sx={{ width: 345 }}>
            <CardContent>
            <h3>{book.title}</h3>
            <p className='details'><strong>Author:</strong> {book.author}</p>
            <p className='details'><strong>Status:</strong> {book.isRead ? 'Read' : 'Unread'}</p>
            </CardContent>
            <CardActions>
            <Button size="small" onClick={() => handleToggleRead(book.id)}>Mark as {book.isRead ? 'Unread' : 'Read'}</Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
};

export default ViewBooksComponent;
