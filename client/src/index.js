import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/fixed_index_background.css";
import "./assets/css/index.css";
import "./assets/css/border_box.css";
import "./assets/css/normalize.css";
import "./assets/css/live_search.css";
import "./assets/css/login_signup.css";
import "./assets/css/library-item.css";
import "./assets/css/profile-item.css";
import "./assets/css/navbar-profile.css";
import "./assets/css/chat.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
