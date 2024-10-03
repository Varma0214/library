// src/pages/MyLibraryPage.jsx
import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import BookList from '../components/BookList';
import './MyLibraryPage.css'; // Import CSS

function MyLibraryPage() {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div className="my-library-page">
      <h1>My Library</h1>
      {myLibrary.length === 0 ? (
        <p>No books in your library.</p>
      ) : (
        <BookList books={myLibrary} removeBook={removeFromLibrary} />
      )}
    </div>
  );
}

export default MyLibraryPage;
