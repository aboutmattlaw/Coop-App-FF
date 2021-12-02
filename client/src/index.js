import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ListDetails from './components/ListDetails';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/signin" element={<Signin />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/listdetails" element={<ListDetails />}/>
    <Route path=":list_id" element={<ListDetails />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
