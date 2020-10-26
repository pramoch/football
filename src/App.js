import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Fixtures from './components/Fixtures/Fixtures';
import Table from './components/Table/Table';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <NavBar />
        <Header />
        <div className={styles.content}>
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
      </div>
    </Router>
  );
}

export default App;
