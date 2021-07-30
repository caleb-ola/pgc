import React from "react";

// REACT ROUTER DOM
import { BrowserRouter, Route, Switch } from "react-router-dom";

// CSS
import "./App.css";

// COMPONENTS
import Home from "./components/home";
import AboutPage from "./components/about-page/about";
import Team from "./components/team-page/team";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/team" component={Team} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
