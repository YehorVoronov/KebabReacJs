import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

/*let rerenderEntireTree=(state)=>{*/
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dispatch={store.dispatch.bind(store)} store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
/*}*/
/*
rerenderEntireTree(store.getState());*/
/*
store.subscribe(()=>{
    let state =store.getState();
    rerenderEntireTree(state);
});
*/

/*let productsAbout=[
    {id:1,productName:"szava1", productCost:"22" ,productDescription:" productcie1"},
    {id:2,productName:"szava2", productCost:"21" ,productDescription:" productcie2"},
    {id:3,productName:"szava3", productCost:"20" ,productDescription:" productcie3"},
    {id:4,productName:"szava4", productCost:"15" ,productDescription:" productcie4"}
]*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
