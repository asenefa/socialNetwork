import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import state from './redux/state';
import {addPost} from './redux/state';
import {updateNewPost} from './redux/state';


export let renderTree = (state) => {
  ReactDOM.render((
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
    </BrowserRouter>
  ), document.getElementById('root'));
}
