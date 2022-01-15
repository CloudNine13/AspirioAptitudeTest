import React, { useState } from 'react';
import '../css/add.css'
import { useNavigate } from "react-router-dom";
import { addEntry } from '../Controller'

/**
 * Summary. 
 * Add function (child)
 * 
 * Description. 
 * Add is the function used to add a new book to Books 
 * collection of MongoDB
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof components
 * 
 */
function Add(){

    const navigate = useNavigate();
    const [added, setAdded] = useState(false)

    const handleSubmit = (event) => {
        // Using handler to handle the submit petition from form.

        event.preventDefault()
        if(!event.target.title.value || !event.target.author.value || !event.target.description.value) {
            console.log("Data is incomplete")
        } else {
            setAdded(true)          // Activating "added" phrase
            const items = {
                name: event.target.title.value, 
                author: event.target.author.value, 
                description: event.target.description.value
            }
            addEntry(items)
            window.setTimeout(() =>{
                setAdded(false)     // Desactivating "added" phrase
            }, 7000)
        }
    }

    return (
        <div>
            <div className='container-add'>
                <form className='form-add' onSubmit={handleSubmit}>
                    <label className='item-add'>
                        Title:
                        <input
                            className='input-add'
                            type="text"
                            name="title"
                            placeholder='Type the name of the book'
                        />
                    </label>
                    <label className='item-add'>
                        Author:
                        <input
                            className='input-add'
                            type="text"
                            name="author"
                            placeholder='Enter the name of author'
                        />
                    </label>
                    <label className='item-add'>
                        Description:
                        <textarea
                            className='textarea-add'
                            rows={17}
                            name="description"
                            placeholder='Type the book description'
                        />
                    </label>
                    <button className="submit-add" type="submit">Submit</button>
                </form>
            </div>
            <div className='aux-container'>
                {added ? (
                    <div className='aux-item1'> 
                        The book is successfully added!
                    </div>
                ):(
                    <div className='aux-item2'> 
                    </div>
                )}
            </div>
            <div className='aux-container'>  
                <button className='aux-item2 button-add' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}
export default Add; 