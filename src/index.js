import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import store from './store/store';
import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['x-access-token'] =localStorage.getItem('token');
  // console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
