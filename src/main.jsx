import React from 'react';
import ReactDOM from 'react-dom/client';
import { Switch, Route } from 'wouter';
import App from './App.jsx';
import Game from './Game.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Switch>
        <Route path='/' component={App} />
        <Route path='/game' component={Game} />
        <Route>404, lol</Route>
      </Switch>
    </Provider>
  </React.StrictMode>,
);
