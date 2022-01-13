import React from 'react';
import books from '../books.json';
import '../css/books.css';

const Books = () => {

    return (
        <div >
            <div>
                { books.map( book => 
                    <div class="container">
                        <button class="name" onClick={ () => alert(book.name) } >{book.name}</button>
                        <button class="edit" onClick={ () => alert(book.description) } >Edit</button>
                    </div> ) 
                }
            </div>
        </div>
    );
}

export default Books