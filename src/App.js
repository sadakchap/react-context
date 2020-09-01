import React from 'react';
import Navbar from './components/layouts/Navbar';
import BookList from './components/books/BookList';
import { ThemeContextProvider } from './context/theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle';


function App() {
	return (
		<div className="main">
			<ThemeContextProvider>
				<Navbar />
				<BookList />
				<ThemeToggle />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
