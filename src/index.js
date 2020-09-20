import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import Test from './Components/Test';
import Intro from './Components/Intro';
import * as serviceWorker from './serviceWorker';

//basename={window.location.pathname || ''}
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter basename={"halloween2020"}>
      <App />
	  <Route exact path="/" component={Intro} />
	  <Route exact path="/test" component={Test} />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
