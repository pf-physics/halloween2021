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
import Dialogues from './Components/Scripts'
import 'semantic-ui-less/semantic.less'
import * as serviceWorker from './serviceWorker';
import wolf from './resources/wolf2.jpg'
import vampire from './resources/vampire.jpg'
import zombie from './resources/zombie.jpg'
import ghost from './resources/ghost.png'
import darkImg from './resources/black.jpg'
import moon from './resources/moon.jpg'
import spider from './resources/spider6.jpg'

const paths = {begin: "/begin", witch:"/witch", skeleton:"/skeleton", ghost: "/ghost", purple:"/test1", orange:"/test2", witchHaunt:"/witch2", zombie: "/zombie", werewolf: "/werewolf", vampire:"/vampire", ghost:"/ghost", middle1:"/middle1", spider:"/spider", stoneQuest:"/stonequest"}

const d = [{text:'Heeeeeeeeeey its HALLOWEEEEEEEEEEEEEEN', input:"potato"}, {text:"halloweenoweenoweeeen"}, {text:"SKELETONS", input:"test"}, {text:"k bye"}]
const d2 = [{text:'ITS SPOOKS TIME'}, {text:"ORANGE PUMPKINS!!"}, {text:"SKELETONS"}, {text:"THE END"}]

const Zombie = (code) => () => <MonsterPanel image={zombie} code={code} dialogue={Dialogues.zombie(code)}
music=""
name="Zombie" color="#002101"/>

const Witch2 = (code) => () => <WitchHaunt code={code} name="WitchHaunt"
                                color="#630700" image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67199786-3498-496b-b0ea-b370ae392068/ddzpwgg-a1343e43-0116-4a4d-8020-51af1ec5b80d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjcxOTk3ODYtMzQ5OC00OTZiLWIwZWEtYjM3MGFlMzkyMDY4XC9kZHpwd2dnLWExMzQzZTQzLTAxMTYtNGE0ZC04MDIwLTUxYWYxZWM1YjgwZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3vohIv_nbTT4S-yR6IzesJLYxI-tVLXjqE95bTJARtQ"/>

const Witch = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.witch(code)}
 image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67199786-3498-496b-b0ea-b370ae392068/ddzpwgg-a1343e43-0116-4a4d-8020-51af1ec5b80d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjcxOTk3ODYtMzQ5OC00OTZiLWIwZWEtYjM3MGFlMzkyMDY4XC9kZHpwd2dnLWExMzQzZTQzLTAxMTYtNGE0ZC04MDIwLTUxYWYxZWM1YjgwZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3vohIv_nbTT4S-yR6IzesJLYxI-tVLXjqE95bTJARtQ"
 name="Witch" color="#4B0082"/>

 const Skeleton = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.skeleton(code)}
 name="Skeleton" color="#211100"/>

  const Vampire = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.vampire(code)}
 name="Vampire" image={vampire} color="#6e0000"/>

 const Werewolf = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.werewolf(code)}
 music="https://www.youtube.com/embed/bNv7Bl9mvUo"
 name="Werewolf" image={wolf} color="rgb(1, 2, 49)"/>

 const Ghost = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.ghost(code)}
 music="https://www.youtube.com/watch?v=Z5xdQIXzIIg"
 name="Ghost" image={ghost} color="#5db2c9"/>

 const AfterGhost = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.afterGhost(code)}
 name="AfterGhost" image={darkImg} color="#000000"/>

 const Begin = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.begin(code)}
 name="Begin" image={moon} color="#000000"/>

 const Spider = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.spider(code)}
 name="Spider" image={spider} color="#000000"/>

  const StoneQuest = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.stoneQuest(code)}
 name="StoneQuest" color="#000000"/>

export const sceneList = [
  {name:"Begin", render: Begin, path: paths.begin},
  {name:"Witch", render: Witch, path: paths.witch},
  {name:"Skeleton", render: Skeleton, path: paths.skeleton},
  {name:"Vampire", render: Werewolf, path: paths.vampire},
  {name:"Werewolf", render: Werewolf, path: paths.werewolf},
  {name:"Zombie", render: Zombie, path: paths.zombie},
  {name:"Ghost", render: Ghost, path: paths.ghost},
  {name:"AfterGhost", render: AfterGhost, path: paths.middle1},
  {name:"Spider", render: Spider, path: paths.spider},
  {name:"WitchHaunt", render:Witch2, path: paths.witchHaunt},
  {name:"StoneQuest", render: StoneQuest, path: paths.stoneQuest},
]

const RenderRoutes = () => {
  const [code, getCode] = useState("")

return <React.StrictMode>
  <BrowserRouter className="App" basename={"halloween2020"}>
    <App getCode={getCode}/>
    <Route exact path="/" component={Intro} />
    <Route exact path={paths.witch} component={Witch(code)} />
    <Route exact path={paths.skeleton} component={Skeleton(code)} />
    <Route exact path={paths.witchHaunt} component={Witch2(code)} />
    <Route exact path={paths.zombie} component={Zombie(code)} />
    <Route exact path={paths.ghost} component={Ghost(code)} />
    <Route exact path={paths.werewolf} component={Werewolf(code)} />
    <Route exact path={paths.vampire} component={Vampire(code)} />
    <Route exact path={paths.middle1} component={AfterGhost(code)} />
    <Route exact path={paths.begin} component={Begin(code)} />
    <Route exact path={paths.spider} component={Spider(code)} />
    <Route exact path={paths.stoneQuest} component={StoneQuest(code)} />
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
