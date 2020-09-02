import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme/ThemeContext';

const BookList = () => {
    
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{ backgroundColor: theme.bg, color: theme.syntax }}>
            <h2>Available Books</h2>
            <ul>
                <li style={{ backgroundColor: theme.ui }}>Zero To one</li>
                <li style={{ backgroundColor: theme.ui }}>the $100 startup</li>
                <li style={{ backgroundColor: theme.ui }}>mind is your business</li>
            </ul>
        </div>
    )
}

export default BookList
