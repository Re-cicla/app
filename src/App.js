import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchPage from './modules/search/search-page';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
