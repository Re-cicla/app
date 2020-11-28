import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SearchPage from './modules/search/search.page';
import ContainersPage from './modules/containers/containers.page';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/containers">
          <ContainersPage />
        </Route>

        <Route path="/">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
