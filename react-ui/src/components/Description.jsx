import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../css/description.css';

/**
 * Summary. 
 * Description function (child)
 * 
 * Description. 
 * Description is the function (React component) used to show 
 * the detail info about certain book
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof components
 * 
 * 
 */
function Description() {
    const navigate = useNavigate();
    const location = useLocation()
    const data = location.state.data

    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <div className="container-desc">
                <div className="card">
                    <div className="cardcontainer">
                        <h1>Title: {data.name}</h1>
                        <h3>Author: {data.author}</h3>
                        <h3>Description: </h3> <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <div className="container-aux-desc">
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}

export default Description; 