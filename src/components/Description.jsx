import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Description() {
    const navigate = useNavigate();
    const location = useLocation()
    const data = location.state.data

    return (
        <div>
            <h1>Title: {data.name}</h1>
            <h3>Author: {data.author}</h3>
            <h5>Description: {data.description}</h5>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}


export default Description; 