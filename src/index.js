import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';


export let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store = {store} state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    rerenderEntireTree(store.getState());
});




reportWebVitals();