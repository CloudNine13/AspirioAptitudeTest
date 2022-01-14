import React, { useEffect, useState, createContext } from 'react';
import { getBooks } from '../Controller'

import '../css/books.css';
import { useNavigate } from 'react-router-dom';

export const Book = createContext()

function Books() {

    const navigate = useNavigate();
    const [books, setBooks] = useState([])
    const [update, setUpdate] = useState(false)

    const handleClick = (data, type) => {
        if (type === "desc") {
            navigate(`/${data._id}`, { state: { data: data }})
        } else if (type === "edit"){
            navigate(`/edit/${data._id}`, { state: { data: data }})
        }
    }

    useEffect(() => {
        const s = getBooks()
        s.on('return books', (data) => {
            setBooks(data)
        }) 

        s.on('update components', _=> {
            setUpdate(true)
        })

        return () => {
            setUpdate(false)
        }
    }, [update])
    
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