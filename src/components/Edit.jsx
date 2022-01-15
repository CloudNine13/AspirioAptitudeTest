import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import '../css/edit.css'
import { updateEntry } from '../Controller'

/**
 * Summary. 
 * Edit function (child)
 * 
 * Description. 
 * Edit is the function used to edit the books saved in collection in Real Time
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof components
 * 
 * @property {Object} data is the property used to get books data dictionary
 * @property {ObjectId} _id is the property used to get books' mongo objectid
 * 
 */
function Edit(){
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.data
    const id = location.state.data._id

    const [name, setName] = useState(data.name)
    const [author, setAuthor] = useState(data.author)
    const [description, setDescription] = useState(data.description)

    useEffect(() => {
        const timer = window.setTimeout(() =>{
            //Using the timer for delaying DB frequent changes. 
            const items = {id: id, name: name, author: author, description: description}
            updateEntry(items)
        }, 1000)

        return () => {
            window.clearTimeout(timer)
        }
    }, [name, author, description])


    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <div className='container-edit'>
                <div className='form-edit'>
                    <p>Title: </p><input className='input-edit' type= "text" value= {name} onChange={e => setName(e.target.value)}/>
                    <p>Author:</p><input className='input-edit' type="text" value= {author} onChange={e => setAuthor(e.target.value)}/>
                    <p>Description:</p> <textarea className='textarea-edit' rows={7} value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <p className='centerp'>The changes are saved 1 second after you finish typing.</p>
                </div>
            </div>
            <div className='container-aux-edit'>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );

}

export default Edit; 