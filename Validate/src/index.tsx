import * as React from 'react';
import { render } from 'react-dom';
import {Home} from './pages/Home';
import ModuleSearch from './pages/Components/ModuleSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

render(<Home />, document.getElementById('root'));
render(<ModuleSearch />, document.getElementById('search'));

// Navigation
/*
render((
    <Router>
       <div>
            <nav>
               <ul>
                 <li>
                   <Link to="/Home">Home</Link>
                 </li>
                 <li>
                   <Link to="/About">About</Link>
                 </li>
               </ul>
            </nav>
            <Route path="/Home" exact component={Home} />
            <Route path="/About" component={About} />
        </div>
    </Router>
 ), document.getElementById('hello'))
 */