// src/pages/BookDetailsPage.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../services/booksData.json';
import { LibraryContext } from '../context/LibraryContext';
import './BookDetailsPage.css'; // Import CSS

function BookDetailsPage() {
  const { id } = useParams();
  const book = booksData.books.find(book => book.id === Number(id));
  const { addToLibrary } = useContext(LibraryContext);

  return (
    <div className="book-details-page">
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Description: {book.description}</p>
      <p>Publication Year: {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)}>Add to My Library</button>
    </div>
  );
}

export default BookDetailsPage;
