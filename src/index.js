import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import MonsterPanel from './Components/MonsterPanel';
import WitchHaunt from './Components/WitchHaunt';
import Intro from './Components/Intro';
import 'semantic-ui-less/semantic.less'
import * as serviceWorker from './serviceWorker';

const paths = {witch:"/witch", skeleton:"/skeleton", ghost: "/ghost", purple:"/test1", orange:"/test2", witchHaunt:"/witch2", zombie: "/zombie"}

const d = [{text:'Heeeeeeeeeey its HALLOWEEEEEEEEEEEEEEN', input:"potato"}, {text:"halloweenoweenoweeeen"}, {text:"SKELETONS", input:"test"}, {text:"k bye"}]
const d2 = [{text:'ITS SPOOKS TIME'}, {text:"ORANGE PUMPKINS!!"}, {text:"SKELETONS"}, {text:"THE END"}]

const Purple = (code) => () => <MonsterPanel code={code} dialogue={d} name="Skeleton" sceneIndex={0} color="#6A0888"/>
const Orange = (code) => () => <MonsterPanel code={code} dialogue={d2} name="OrangeSkeleton" color="orange"/>
const Zombie = (code) => () => <MonsterPanel code={code} dialogue={d2} name="Zombie" color="green"/>
const Witch2 = (code) => () => <WitchHaunt code={code} name="WitchHaunt" color="#630700"/>

export const sceneList = [
  {name:"Skeleton", render:Purple, path: paths.purple},
  {name:"OrangeSkeleton", render:Orange, path: paths.orange},
  {name:"WitchHaunt", render:Witch2, path: paths.witchHaunt},
  {name:"Zombie", render: Zombie, path: paths.zombie},
]

const RenderRoutes = () => {
  const [code, getCode] = useState("")

return <React.StrictMode>
  <BrowserRouter className="App" basename={"halloween2020"}>
    <App getCode={getCode}/>
    <Route exact path="/" component={Intro} />
    <Route exact path={paths.purple} component={Purple(code)} />
    <Route exact path={paths.orange} component={Orange(code)} />
    <Route exact path={paths.witch} component={Orange(code)} />
    <Route exact path={paths.witchHaunt} component={Witch2(code)} />
    <Route exact path={paths.zombie} component={Zombie(code)} />
  </BrowserRouter>
  </React.StrictMode>
}

//basename={window.location.pathname || ''}
ReactDOM.render(
  <RenderRoutes/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
