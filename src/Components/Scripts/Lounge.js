import React from 'react';
import {phase0, phase1, phase2, GeneralHealthRules, guysName} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'

const Rules1 = (phase) => () => <>
	<h1>RULES: A friendly game</h1>
	<p>Step into the main room. Once at a time, each player must go up to the board and select a piece of paper from the box.</p>
	<p>Close your eyes and draw. The other players must guess what you are drawing.</p>
	<p>You have a minute and a half to draw as many as you can.</p>
	<p>You get one point for guessing correctly, and one point for each drawing that was guessed.</p>
	<p>Ghosts can use 10 ghost points to reduce someone's time to one minute</p>
	<p>Ghosts can use 30 ghost points to make someone use their non-dominant hand.</p>
	<GeneralHealthRules phase={phase}/>
	<p>Input 'next' when you're done</p>
</>

const Rules2 = () => <>
	<h2>RULES: Dissection </h2>
	<p>{guysName} loves snacking on intestines.</p>
	<p>Take one creature for your whole group from the fridge. Cut the creature open and each extract a n̶o̶o̶d̶l̶e̶ intestine. Try not to break it.</p>
	<p>Throw the intestine onto the "plate". Try to keep the intestine as straight as possible.</p>
	<p>Win by having the longest spanning intestine</p>
	<GeneralHealthRules/>
	<p>Input 'next' when you're done</p>
</>


const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "I've worked up quite an apetite. Would you mind grabbing us some food?"},
	{text: Rules2, isObject: true, input:"next"},
	{text: "Mmm, that was quite exquisite."},
	{text: "I'm quite full now... so perhaps I'll..."},
	{text: "zzzzz..." },
	{text: (room >= 4) ? "A nap sounds good... why don't join him. Perhaps your friends will return soon." : "While he is asleep, perhaps go visit the pumpkin patch.", noImage: true},
	]
	: code == phase1 ?
	[
	{text: "Welcome to the lounge! Feel free to sit down and relax."},
	{text: "Why don't we have a friendly game? As my eyesight is weakened, I will of course give you a handicap as well!"},
	{text: Rules1(code), isObject: true, input:"next"},
	{text: "Hmm... maybe that handicap was too harsh..."},
	{text: (room >= 4) ? "I'm feeling a little tired. Why don't we retire to the dining room? I'll meet you there." : "Let us visit the pumpkin patch now! I'll meet you there."}
	] : code == phase0 ? [ {text: "", noImage: true} ] :
	[ {text: "", noImage: true} ]

export default dialogue