import React from "react";
import Books from "./components/Books";
import Description from "./components/Description";
import Edit from "./components/Edit";
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
               <Routes>
                   <Route exact path='/' element={<Books />}></Route>
                   <Route path="/:id" element={<Description />} />
                   <Route path="/edit/:id" element={<Edit />} />
               </Routes>
            </div>
        </Router>
    );
}

export default App;
