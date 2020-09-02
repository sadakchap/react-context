import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext();

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'Zero To one', id: 1},
        { title: 'Bhagavat Geeta', id: 2},
        { title: 'Garudha Purana', id: 3},
        { title: 'Mind is your business', id: 4},
        { title: 'The monk who sold his ferrai', id: 5},
    ]);

    const updateBooks = (title) => {
        setBooks([...books, {title: title, id: uuidv4()}])
    }

    return(
        <BookContext.Provider value={{ books, updateBooks}}>
            {props.children}
        </BookContext.Provider>
    )
}
