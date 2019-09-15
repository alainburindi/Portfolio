import React from 'react';
import 'bulma/css/bulma.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';

function App() {
  return (
    <div className="App">
    <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
