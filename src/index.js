
import React from 'react';
import { render } from "react-dom";
import { Router, Route, hashHistory } from 'react-router'

import {App} from './components/AppComponent';
import Woops404 from './components/Woops404';

import "./style/styles.scss";


window.React = React


const redirectPage = () => {
    hashHistory.push('/0');
}


render(

    <Router history={hashHistory}>
        <Route path=":index" component={App}/>
        <Route path="" component={ Woops404 } />
        <Route path="*" onEnter={ redirectPage }></Route>
    </Router>,

    document.getElementById('root')
)