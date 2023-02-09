import React from "react";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover={false}
        theme="dark"
      />
      <App />
    </Provider>
  </BrowserRouter>
);
