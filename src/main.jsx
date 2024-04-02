import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { Switch, Route } from 'wouter';
import rootReducer from './reducers';
import App from './App.jsx';
import Game from './Game.jsx';
import './index.css';

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

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
)
