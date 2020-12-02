import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'theme/styles/app.styles.css';

import AppRouter from 'routes';
import configureStore from 'redux-store/configureStore';

import reportWebVitals from 'utils/reportWebVitals';

const { store } = configureStore(undefined);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
