import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/redux/store";
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

  //  </React.StrictMode>
);
