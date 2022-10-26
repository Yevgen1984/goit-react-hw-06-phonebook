import React from 'react';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import {PersistGate} from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}> 
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);