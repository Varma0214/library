// src/components/BookList.jsx
import React from 'react';
import BookCard from './BookCard';
import './BookList.css'; // Import CSS

function BookList({ books, removeBook }) {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} removeBook={removeBook} />
      ))}
    </div>
  );
}

export default BookList;
