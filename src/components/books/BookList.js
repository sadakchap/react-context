import React, { Component } from 'react'
import { ThemeContext } from '../../context/theme/ThemeContext';


export class BookList extends Component {
 
    static contextType = ThemeContext;
    
    render() {

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light: dark;

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
}

export default BookList
