import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './Store'; // Import your Redux store
import './index.css';
import App from './App';
import { SessionProvider } from './Context'; // Import SessionProvider
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <SessionProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SessionProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
