import React, { useEffect, useState, createContext } from 'react';
import GetBooks from '../Controller'

import '../css/books.css';
import { useNavigate } from 'react-router-dom';

export const Book = createContext()

function Books() {

    const navigate = useNavigate();
    const [books, setBooks] = useState([])

    const handleClick = (data, type) => {
        if (type === "desc") {
            navigate(`/${data.name}`, { state: { data: data }})
        } else if (type === "edit"){
            navigate(`/edit/${data.name}`, { state: { data: data }})
        }
    }

    useEffect(() => {
        const s = GetBooks()
        s.on('return books', (data) => {
            setBooks(data)
        }) 
    }, [])
    
    return (
        <div>
            {books.map( book => 
                <div className="container">
                    <button className='name' onClick={()=>handleClick(book, "desc")}>{book.name}</button>
                    <button className='edit' onClick={()=>handleClick(book, "edit")}>Edit</button>
                </div> 
            )}
        </div>
    )
}


export default Books