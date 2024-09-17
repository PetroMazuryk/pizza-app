import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js';
import App from './App.js';
import './index.scss';

const rootElem = document.getElementById('root');

if (rootElem) {
  ReactDOM.createRoot(rootElem).render(
    <React.StrictMode>
      <BrowserRouter basename="/pizza-app">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
