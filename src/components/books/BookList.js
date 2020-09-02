import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme/ThemeContext';
import { BookContext } from '../../context/books/BookContext';
import BookForm from './BookForm';


const BookList = () => {
    
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);

    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{ backgroundColor: theme.bg, color: theme.syntax }}>
            <h2>Available Books</h2>
            <ul>
                { books.map(book => (
                    <li style={{ backgroundColor: theme.ui }} key={book.id} > {book.title}</li>
                ))}
            </ul>
            <BookForm />
        </div>
    )
}

export default BookList
