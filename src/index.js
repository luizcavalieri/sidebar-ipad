
import React from 'react';
import { render } from "react-dom";
import { Router, Route, hashHistory } from 'react-router'

import {App} from './components/AppComponent';
import Woops404 from './components/Woops404';

import "./style/styles.scss";


window.React = React


const redirectPage = () => {
    console.log("This function is being kicked!")
    hashHistory.push('/0');
}


// tried to add a route for the application based on the key of the elements in the array "content"
// but couldn't achieve the redirect / rewrite in case the element doesn't exist

render(
    <Router history={hashHistory}>
        <Route path=":index" component={App}/>
        <Route path="" component={ Woops404 } />
        <Route path="*" onEnter={ redirectPage }></Route>
    </Router>,

    document.getElementById('root')
)