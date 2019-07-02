import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore, initialState } from '../store';
import routes from './routes';

import './Root.css';
import { Header } from './Root.styles';

import Router from './router';
import { ThemeProvider } from './theme-provider';
import Navigation from './navigation';

const NavigationWithRouter = withRouter(Navigation);

const store = configureStore(initialState);

const Root = (
  <Provider store={store}>
    <ThemeProvider>
        <Router routes={routes}>
          {/* <Header>
            <NavigationWithRouter />
          </Header> */}
        </Router>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(
  Root,
  document.getElementById('app')
);