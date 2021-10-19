import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  HashRouter
} from "react-router-dom";
import './index.css';
import App from './App';
import MonsterPanel from './Components/MonsterPanel';
import WitchHaunt from './Components/WitchHaunt';

import ThreatScene from './Components/FinalFight'

import Dialogues from './Components/Scripts'
import 'semantic-ui-less/semantic.less'
import * as serviceWorker from './serviceWorker';
import wolf from './resources/wolf2.jpg'
import vampire from './resources/vampire.jpg'
import skeleton from './resources/skeleton.jpg'
import ghost from './resources/ghost.png'
import spider from './resources/spider6.jpg'

import oracle from './resources/oracle1.jpg'

import ghostSong from './resources/ghost.mp3'
import vampireSong from './resources/vampire.mp3'
import skeletonSong from './resources/skeleton.mp3'
import spiderSong from './resources/spiderRune.mp3'
import witchSong from './resources/witch.mp3'

const paths = {begin: "/begin", witch:"/witch", skeleton:"/skeleton", witchHaunt:"/witch2", zombie: "/zombie", werewolf: "/werewolf", vampire:"/vampire", ghost:"/ghost", middle1:"/middle1", spider:"/spider", stoneQuest:"/stonequest", threat:"/threat", ending:"/ending", finalFight:"/finalFight"}

const Witch2 = (code) => () => <WitchHaunt code={code} name="WitchHaunt"
                                color="#630700" image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67199786-3498-496b-b0ea-b370ae392068/ddzpwgg-a1343e43-0116-4a4d-8020-51af1ec5b80d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjcxOTk3ODYtMzQ5OC00OTZiLWIwZWEtYjM3MGFlMzkyMDY4XC9kZHpwd2dnLWExMzQzZTQzLTAxMTYtNGE0ZC04MDIwLTUxYWYxZWM1YjgwZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3vohIv_nbTT4S-yR6IzesJLYxI-tVLXjqE95bTJARtQ"/>

 const PumpkinPatch = (code, room) => () => <MonsterPanel code={code} room={room} image={skeleton} dialogue={Dialogues.pumpkin(code, room)}
    name="PumpkinPatch" color="#211100"/>

export const sceneList = [
  //{name:"Begin", render: Begin, path: paths.begin, music: intro},
  //{name:"Witch", render: Witch, path: paths.witch, music: witchSong},
  {name:"PumpkinPatch", render: () => ({code,room}) => <MonsterPanel code={code} room={room} image={skeleton} dialogue={Dialogues.pumpkin(code, room)}
    name="PumpkinPatch" color="#211100"/>, path: paths.skeleton, music: skeletonSong},
  {name:"HauntedForest", render: () => ({code,room}) => <MonsterPanel code={code} dialogue={Dialogues.forest(code,room)}
    music="https://www.youtube.com/watch?v=Z5xdQIXzIIg"
    name="Oracle" image={spider} color="#4B0082"/>, path: paths.spider, music: spiderSong},
  {name:"Oracle", render: () => ({code,room}) => <MonsterPanel code={code} dialogue={Dialogues.oracle(code,room)}
    music={witchSong}
    name="Oracle" image={oracle} color="#4B0082"/>, path: paths.spider, music: witchSong},
  {name:"MainRoom", render: () => ({code,room}) => <MonsterPanel code={code} dialogue={Dialogues.mainroom(code,room)}
    music="https://www.youtube.com/watch?v=Z5xdQIXzIIg"
    name="MainRoom" image={oracle} color="#4B0082"/>, path: paths.spider, music: ghostSong},
  //{name:"Vampire", render: () => ({code,room}) => <MonsterPanel code={code} dialogue={Dialogues.vampire(code, room)}
 //name="Vampire" image={vampire} color="#6e0000"/>, path: paths.vampire, music: vampireSong}
  /*
  {name:"Werewolf", render: Werewolf, path: paths.werewolf, music: wolfSong},
  {name:"Zombie", render: Zombie, path: paths.zombie, music: zombieSong},
  {name:"Ghost", render: Ghost, path: paths.ghost, music: ghostSong},
  {name:"AfterGhost", render: AfterGhost, path: paths.middle1},
  {name:"Spider", render: Spider, path: paths.spider, music: spiderSong},
  {name:"WitchHaunt", render:Witch2, path: paths.witchHaunt},
  {name:"StoneQuest", render: StoneQuest, path: paths.stoneQuest, music: Ominous},
  {name:"Threat", render: Threat, path: paths.threat},
  {name:"FinalFight", render: FinalFight, path: paths.finalFight, music: fightSong},
  {name:"Ending", render: Ending, path: paths.ending, music:end}*/
]

const RenderRoutes = () => {
const basename = "halloween2021"
return <React.StrictMode>
  <HashRouter className="App">
    <Route exact path="/" component={App} />
  </HashRouter>
  </React.StrictMode>
}

//basename={window.location.pathname || ''}
ReactDOM.render(
  <RenderRoutes/>,
  document.getElementById('root')
);

console.log(window.location.pathname.split(',').slice(0,-1))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
