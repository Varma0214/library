import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { LibraryProvider } from './context/LibraryContext'; // Make sure this path is correct

ReactDOM.render(
    <LibraryProvider>
        <Router>
            <App />
        </Router>
    </LibraryProvider>,
    document.getElementById('root')
);
