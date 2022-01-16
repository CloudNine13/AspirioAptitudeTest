import React, { useEffect, useState, createContext } from 'react';
import { getBooks, setSocket } from '../Controller'
import '../css/books.css'
import { useNavigate } from 'react-router-dom';

const s = setSocket()
export const BookContext = createContext()

/**
 * Summary. 
 * Book function (parent)
 * 
 * Description. 
 * Book is the function (React component) used to show 
 * the list of the books and control other child components
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof components
 * 
 * @property {List} books is the property used to store the books' list's data. 
 * 
 */
function Books() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    const handleClick = (type, data = null) => {
        //Navigating to other components by clicking on buttons

        switch(type) {
            case "desc":
                navigate(`/${data._id}`, { state: { data: data }})
                break
            case "edit":
                navigate(`/edit/${data._id}`, { state: { data: data }})
                break
            case "add":
                navigate('/add')
                break
            default:
                break
        }
    }

    s.on('update components', data => {
        //Listening to server changes to update the book list
        setBooks(data.data)
    })
    
    useEffect(() => {
        getBooks(s)  // Sending (async) petition to DB
        console.log("Client: Getting the books...")

        s.on('ret bks', data => {
            //Listening to the petition of getting all the books

            console.log("Client: Setting the books...")

            setBooks(data.data)
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <div id="app" className="loader-books"></div>
    } else {
        return (
            <div>
                <div className='button-container'>
                    <button className='add-books' onClick={()=>handleClick("add")}>Add New Book</button>
                </div>
                { books.map( book => 
                    <div className="container-books">
                        <button className='name-books' onClick={()=>handleClick("desc", book)}>{book.name}</button>
                        <button className='edit-books' onClick={()=>{handleClick("edit", book)}}>Edit</button>
                    </div> 
                )}
            </div>
        )
    }
}

export default Books