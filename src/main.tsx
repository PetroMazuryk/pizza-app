import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import App from './App.js';
import './index.scss';

const rootElem = document.getElementById('root');

if (rootElem) {
  ReactDOM.createRoot(rootElem).render(
    <React.StrictMode>
      <BrowserRouter basename="/pizza-app">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
