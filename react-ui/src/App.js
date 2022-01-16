import React from "react";
import Books from "./components/Books";
import Description from "./components/Description";
import Edit from "./components/Edit";
import Add from "./components/Add";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

function App() {

    console.log("Client: App has started!")

    return (
        <Router>
            <div className="App">
               <Routes>
                   <Route exact path='/' element={<Books />}></Route>
                   <Route path="/:id" element={<Description />} />
                   <Route path="/edit/:id" element={<Edit />} />
                   <Route path="/add" element={<Add />} />
               </Routes>
            </div>
        </Router>
    );
}

export default App;
