import React, { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import LiveSearch from "./components/search/LiveSearch";
import AddLiveSearch from "./components/add_books/AddLiveSearch";
import SignUpContainer from "./components/signup/SignUpContainer";
import Profile from "./components/user_profile/profile";
import { Switch, Route, Link } from "react-router-dom";
import LoginContainer from "./components/LoginContainer";

function App() {
  const [state, setState] = useState({
    currentUser: {},
  });

  const userLogin = (userObj) => {
    setState({ ...state, currentUser: userObj });
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUpContainer userLogin={userLogin} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/livesearch">
          <LiveSearch />
        </Route>
        <Route path="/addbook">
          <AddLiveSearch />
        </Route>
        <Route path="/login">
          <LoginContainer userLogin={userLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
