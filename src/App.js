import React from "react";
import "./style1.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    //function SaaViIgang extends React.Component() Smid det hele ind i en komponent <<<<  
    <Router>

      
       
     <header>
      <div>
        <ul className="header">
          <li>
            <NavLink exact to="/">Oevelse1</NavLink>
          </li>
          <li>
            <NavLink to="/Oevelse2">Oevelse2</NavLink>
          </li>
          <li>
            <NavLink to="/Oevelse3">Oevelse3</NavLink>
          </li>
        </ul>
        </div>
        </header>
        
        <hr />
      
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Oevelse1 />
          </Route>
          <Route path="/Oevelse2">
            <Oevelse2 />
          </Route>
          <Route path="/Oevelse3">
            <Oevelse3 />
          </Route>
        </Switch>
        </div>
     
      
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Oevelse1() {
  return (
    <div>
      <h2>Oevelse 1</h2>
    </div>
  );
}

function Oevelse2() {
  return (
    <div>
      <h2>Oevelse2</h2>
    </div>
  );
}

function Oevelse3() {
  return (
    <div>
      <h2>Oevelse3</h2>
      <h3></h3>
    
      <img src='./favicon.ico' alt="" height="300" width="500"></img>
      <h4></h4>
     
    </div>
  );
}

//