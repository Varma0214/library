# Virtual Book Library

A React application that allows users to search for books and manage their personal library.

## Features
- Search books by title, author, or genre.
- View details of each book.
- Add books to your personal library.
- Remove books from your library.

## Technologies Used
- React.js
- React Router
- Context API
- CSS

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Varma0214/virtual-book-library.git
2. Navigate to the project directory:
   cd virtual-book-library
3. Install the dependencies:
   npm install
   Running the Application
Start the development server:
  npm start
Open your browser and go to http://localhost:3000.

// Directory Structure //
virtual-book-library/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── BookList.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   ├── context/
│   │   └── LibraryContext.js
│   ├── pages/
│   │   ├── BookDetailsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── MyLibraryPage.jsx
│   ├── services/
│   │   └── booksData.json
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md

