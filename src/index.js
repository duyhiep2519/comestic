import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "routes/route";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import store from "redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Routes />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
