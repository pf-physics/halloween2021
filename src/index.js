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
import DialogueSwitcher from './Components/DialogueSwitcher';

import ThreatScene from './Components/FinalFight'

import Dialogues from './Components/Scripts'
import 'semantic-ui-less/semantic.less'
import * as serviceWorker from './serviceWorker';
import wolf from './resources/wolf2.jpg'
import vampire from './resources/vampire.jpg'
import skeleton from './resources/skeleton.jpg'
import zombie from './resources/zombie.jpg'
import ghost from './resources/ghost.png'
import darkImg from './resources/black.jpg'
import moon from './resources/moon.jpg'
import spider from './resources/spider6.jpg'

import oracle from './resources/oracle1.jpg'

import Ominous from './resources/ominous.mp3'
import intro from './resources/intro.mp3'
import ghostSong from './resources/ghost.mp3'
import vampireSong from './resources/vampire.mp3'
import skeletonSong from './resources/skeleton.mp3'
import spiderSong from './resources/spiderRune.mp3'
import fightSong from './resources/beforeEnding.mp3'
import witchSong from './resources/witch.mp3'
import zombieSong from './resources/zombie.mp3'
import wolfSong from './resources/werewolf.mp3'
import end from './resources/Ending.mp3'

const paths = {begin: "/begin", witch:"/witch", skeleton:"/skeleton", ghost: "/ghost", witchHaunt:"/witch2", zombie: "/zombie", werewolf: "/werewolf", vampire:"/vampire", ghost:"/ghost", middle1:"/middle1", spider:"/spider", stoneQuest:"/stonequest", threat:"/threat", ending:"/ending", finalFight:"/finalFight"}

const Zombie = (code) => () => <MonsterPanel image={zombie} code={code} dialogue={Dialogues.zombie(code)}
name="Zombie" color="#002101"/>

const Witch2 = (code) => () => <WitchHaunt code={code} name="WitchHaunt"
                                color="#630700" image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67199786-3498-496b-b0ea-b370ae392068/ddzpwgg-a1343e43-0116-4a4d-8020-51af1ec5b80d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjcxOTk3ODYtMzQ5OC00OTZiLWIwZWEtYjM3MGFlMzkyMDY4XC9kZHpwd2dnLWExMzQzZTQzLTAxMTYtNGE0ZC04MDIwLTUxYWYxZWM1YjgwZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3vohIv_nbTT4S-yR6IzesJLYxI-tVLXjqE95bTJARtQ"/>

 const PumpkinPatch = (code, room) => () => <MonsterPanel code={code} room={room} image={skeleton} dialogue={Dialogues.pumpkin(code, room)}
    name="PumpkinPatch" color="#211100"/>

const Witch = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.witch(code)}
 image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67199786-3498-496b-b0ea-b370ae392068/ddzpwgg-a1343e43-0116-4a4d-8020-51af1ec5b80d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjcxOTk3ODYtMzQ5OC00OTZiLWIwZWEtYjM3MGFlMzkyMDY4XC9kZHpwd2dnLWExMzQzZTQzLTAxMTYtNGE0ZC04MDIwLTUxYWYxZWM1YjgwZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3vohIv_nbTT4S-yR6IzesJLYxI-tVLXjqE95bTJARtQ"
 name="Witch" color="#4B0082"/>

 const Skeleton = (code) => () => <MonsterPanel code={code} image={skeleton} dialogue={Dialogues.skeleton(code)}
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

  const Threat = (code) => () => <ThreatScene code={code} name="Threat"
    color="#000000" image=""/>

const FinalFight = (code) => () => <MonsterPanel code={code} name="FinalFight" dialogue={Dialogues.finalFight(code)}
    color="#000000" image=""/>

 const Ending = (code) => () => <MonsterPanel code={code} dialogue={Dialogues.ending(code)}
 name="Ending" isEnd={true} image={""} color="#00000075"/>

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
  {name:"Vampire", render: () => ({code,room}) => <MonsterPanel code={code} dialogue={Dialogues.vampire(code, room)}
 name="Vampire" image={vampire} color="#6e0000"/>, path: paths.vampire, music: vampireSong}
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
  const [code, getCode] = useState("")

const basename = "halloween2021"
return <React.StrictMode>
  <HashRouter className="App">
    <App getCode={getCode}/>
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
