import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { updateEntry } from '../Controller'

function Edit(){
    const navigate = useNavigate();
    const location = useLocation()
    const data = location.state.data
    const id = location.state.data._id

    const [name, setName] = useState(data.name)
    const [author, setAuthor] = useState(data.author)
    const [description, setDescription] = useState(data.description)


    useEffect(() => {
        const timer = setTimeout(() =>{
            updateEntry(id, name, author, description)
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [name, author, description])


    return (
        <div>
            <h1>Title: </h1><input type= "text" value= {name} onChange={e => setName(e.target.value)}/>
            <h3>Author:</h3><input type="text" value= {author} onChange={e => setAuthor(e.target.value)}/>
            <h5>Description:</h5> <textarea rows={15} cols={70} value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <p></p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );

}

export default Edit; 