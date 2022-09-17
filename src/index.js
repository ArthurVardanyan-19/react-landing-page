import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { createStore} from "redux";
import { reducer } from '../src/Redux/Reducers/index';
import { Provider } from 'react-redux';


const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
);
