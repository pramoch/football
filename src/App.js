import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Fixtures from './components/Fixtures/Fixtures';
import Table from './components/Table/Table';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <NavBar />
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
      </div>
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
