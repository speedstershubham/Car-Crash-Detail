import React from "react";
import CardTable from "./components/CarTable";
import useCarDetail from "./hooks/useCarDetail";
import FilterContainer from "./components/FilterContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/users"></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
