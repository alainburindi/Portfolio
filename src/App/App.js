import React from 'react';
import 'bulma/css/bulma.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/contact';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter basename="/">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
