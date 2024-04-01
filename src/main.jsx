import React from 'react';
import ReactDOM from 'react-dom/client';
import { Switch, Route } from 'wouter';
import App from './App.jsx';
import Game from './Game.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Switch>
      <Route path='/' component={App} />
      <Route path='/game' component={Game} />
      <Route>404, lol</Route>
    </Switch>
  </React.StrictMode>,
)
