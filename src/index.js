import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InfoProvider } from './components/context'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <InfoProvider>
  <Router>
    <App />
  </Router>
  </InfoProvider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Browser Router is used for doing client side routing with URL segments. You can load top level components for each route. This helps seperate concerns in yout app and make logic/data flow more clear.