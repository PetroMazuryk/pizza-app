import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/pizza-app">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
