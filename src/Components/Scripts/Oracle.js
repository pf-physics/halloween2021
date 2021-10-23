import React from 'react';
import {guysName, phase0, phase1, phase2, GeneralHealthRules} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'
import oracle from '../../resources/oracle1.jpg'
import host from '../../resources/host.jpg'


const Rules1 = (phase) => () => <>
	<h1>RULES: Predict your future</h1>
	<p>Predict your future by throwing shooting stars onto the constellations.</p>
	<p>Throw your shooting stars onto the constellations, try to get one star in each constellation. Hold onto the star tail in case it doesn't land.</p>
	<p>Get 5 points for each new constellation you reach. Get extra five points for landing on a line and an extra ten points for landing on a star.</p>
	<p>Fortunes:</p>
	Get all constellations: You have a bright future! Make someone drink twice <br/>
	Get 4-6: You have a nice future! Make someone drink once <br/>
	Get 1-3: You have... a future... drink once <br/>
	Get 0: Your future isn't great. Drink twice <br/><br/>
	<GeneralHealthRules phase={phase}/>
</>

const Rules2 = () => <>
	<h2>RULES: Telepathy </h2>
	<p>Each person must come up with four words that the others must act out. Write your name on the paper.</p>
	<p>You have one minute and a half to act as many as you can (up to four)</p>
	<p>You get one point for guessing correctly, and one point for each that you guess correctly. You cannot guess your own.</p>
	<p>Ghosts can use 10 ghost points to reduce someone's time to one minute</p>
	<GeneralHealthRules/>
</>


const Rules3 = () => <>
	<h2>RULES: Find the curse</h2>
	<p>Split up into two groups, of ghost and living (not necessarily equal). If you are all dead/alive, split into two groups of 2/3.</p>
	<p>Grab the lanterns off the table in the study and make your way downstairs into the dungeon, using the lanterns to light your way. (If the lights are on in the basement, please turn them off. If someone is down there, please wait for them to leave)</p>
	<p>There are multiple documents. Keep searching until ONE group has found ONE document. Leave the others behind.</p>
	<p>The winning group gains 10 health/ghost points. The losing group loses 10 health/ghost points.</p>
	<p>Note - only go into the middle dungeon cell. You can also go into the cell without a door.</p>
	<p>Don't forget to return the lanterns to the table</p>
</>

const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "The situation becomes more dire as time moves on.", switchImage: true},
	{text: "We will use the last of our power to try and find the source of the manor's disease."},
	{text: "While we do so, attempt to practice your telepathy. It may save your life."},
	{text: Rules2, isObject: true},
	{text: "Yes... there is something corrupt in the dungeon. You must find what is it."},
	{text: Rules3, isObject: true},
	{text: (room >= 4) ? "I recommend you regroup with your friends. It is time we discover what is wrong with this manor." : "We must examine this document. Perhaos you should check on " + guysName + " in the lounge now."},
	]
	: code == phase1 ?
	[
	{text: "Welcome to the oracle's room!"},
	{text:"Welcome. We see all. We can reveal to you what is hidden. No secrets escape our scrutiny.", image: oracle},
	{text: "Oracle, what does the future have in store for us?", image: host},
	{text: Rules1(code), isObject: true},
	{text: (room >= 4) ? "I'm feeling a little tired. Why don't we retire to the main room? I'll meet you there." : "Hmm... you also seem to be quite rusty. Well, no matter. Let us head to the lounge. I'll meet you there."},
	{text: "Humans, poor humans, caught up in this mess", switchImage: true },
	{text: "There is something wrong with the manor. Our infinite widsom has become finite. The future is unclear yet clearly dark." },
	{text: "If you wish to escape alive, we implore you to investigate. Act as our eyes and ears." },
	{text: "We wish you luck."},
	//{text: "Before moving to the next room, each (secretly) write down the name of two famous movies on two pieces of paper and put them in the box. Also write your name on the paper.", noImage: true}
	] : code == phase0 ?
	[ {text: "", noImage: true}]
	: [ {text: "Time is running out... keep searching...", switchImage: true} ]


export default dialogue