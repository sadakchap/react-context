import React, { useState, useContext } from 'react'
import { BookContext } from '../../context/books/BookContext';

const BookForm = () => {
    
    const [title, setTitle] = useState('');

    const { updateBooks } = useContext(BookContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateBooks(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="Add New Book"/>
        </form>
    )
}

export default BookForm
