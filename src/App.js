import React from 'react';
import Home from "./pages/home"
import Header from "./components/header"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './main.css';

function App() {
  return (
    <div className="app">
    <Router>
      <Header/>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
