import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppRouter from './AppRouter';
import rootReducer from './reducer';
import './App.css';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
