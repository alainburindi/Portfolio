import React from 'react';
import 'bulma/css/bulma.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
    <Provider store={store}>

      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        </HashRouter>
        </Provider>
    </div>
  );
}

export default App;
