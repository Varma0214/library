import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    setMyLibrary((prevLibrary) => [...prevLibrary, book]);
  };

  const removeFromLibrary = (bookId) => {
    setMyLibrary((prevLibrary) => prevLibrary.filter(book => book.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
