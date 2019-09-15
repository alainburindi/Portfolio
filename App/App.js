import React from 'react';
import 'bulma/css/bulma.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/" />
    </div>
  );
}

export default App;
