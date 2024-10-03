// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'; // Import CSS

function BookCard({ book, removeBook }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
      {removeBook && (
        <button onClick={() => removeBook(book.id)}>Remove from Library</button>
      )}
    </div>
  );
}

export default BookCard;
