import React from 'react';
import Navbar from './components/layouts/Navbar';
import BookList from './components/books/BookList';
import { ThemeContextProvider } from './context/theme/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { AuthContextProvider } from './context/auth/AuthContext';

function App() {
	return (
		<div className="main">
			<ThemeContextProvider>
				<AuthContextProvider>
					<Navbar />
					<BookList />
					<ThemeToggle />
				</AuthContextProvider>
			</ThemeContextProvider>
		</div>
	);
}

export default App;
