import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Fixtures from './components/Fixtures/Fixtures';
import Table from './components/Table/Table';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/fixtures">
            <Fixtures />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Table() {
//   return <h2>Table</h2>;
// }

// function Fixtures() {
//   return <h2>Fixtures</h2>;
// }

export default App;
