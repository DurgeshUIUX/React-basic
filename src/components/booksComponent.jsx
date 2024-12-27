import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const BooksComponent = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    title: yup
      .string('Enter Book Title')
      .required('Title is required'),
    author: yup
      .string('Enter Author name')
      .required('Author name is required'),
  });

  const handleSubmit = (e) => {
    console.log(e);
    dispatch(addBook(e));
    setTitle('');
    setAuthor('');
  };
    const formik = useFormik({
      initialValues: {
        id: Date.now(),
        title: '',
        author: '',
        isRead: false,

      },
      validationSchema: validationSchema,
      onSubmit: handleSubmit,
    });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Book Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          margin="normal"
        />
        <TextField
          fullWidth
          id="author"
          name="author"
          label="Author"
          type="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
          margin="normal"
        />
        <Button color="primary" variant="contained"  type="submit" margin="normal">
          Add Book
        </Button>
      </form>
    </div>
  );
};

export default BooksComponent;
