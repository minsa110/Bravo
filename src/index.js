import React from 'react';
import ReactDOM from 'react-dom';



import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import App from './authorization/App';
import AuthenticatedPages from './authorization/AuthenticatedPages.js';
import PageTwo from './Search/Add.js';

import './index.css';

import AddPage from './Search/Add.js'


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={AuthenticatedPages}/>
                <Route path="page-1" component={AuthenticatedPages}/>
                <Route path="page-2" component={PageTwo}/>
            </Route>
        </Router>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <AddPage />,
//   document.getElementById('root')
// );
