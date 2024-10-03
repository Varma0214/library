// src/pages/HomePage.jsx
import React, { useState } from 'react';
import booksData from '../services/booksData.json';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import './HomePage.css'; // Import CSS

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const books = booksData.books;

  // Filter books based on search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      <SearchBar onSearch={setSearchQuery} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default HomePage;
