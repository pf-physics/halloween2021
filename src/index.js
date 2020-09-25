import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Test from './Components/Test';
import Intro from './Components/Intro';
import 'semantic-ui-less/semantic.less'
import * as serviceWorker from './serviceWorker';

const paths = {witch:"/witch", skeleton:"/skeleton", ghost: "/ghost"}

const d = [{text:'Heeeeeeeeeey its HALLOWEEEEEEEEEEEEEEN', input:"potato"}, {text:"halloweenoweenoweeeen"}, {text:"SKELETONS", input:"test"}, {text:"k bye"}]
const d2 = [{text:'ITS SPOOKS TIME'}, {text:"ORANGE PUMPKINS!!"}, {text:"SKELETONS"}, {text:"THE END"}]

const Purple = () => <Test dialogue={d} name="Skeleton" sceneIndex={0} color="#6A0888"/>
const Orange = () => <Test dialogue={d2} name="OrangeSkeleton" color="orange"/>

export const sceneList = [
  {name:"Skeleton", render:Purple, path:"/test"},
  {name:"OrangeSkeleton", render:Orange, path:"/test2"}
]

//basename={window.location.pathname || ''}
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter className="App" basename={"halloween2020"}>
      <App/>
	  <Route exact path="/" component={Intro} />
	  <Route exact path="/test" component={Purple} />
    <Route exact path="/test2" component={Orange} />
    <Route exact path={paths.witch} component={Orange} />    
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
