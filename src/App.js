import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './modules/search/search.page';
import MapPage from './modules/map/map.page';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);
// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/map'>
          <MapPage />
        </Route>

        <Route path='/'>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
