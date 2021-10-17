import React from 'react';
import {phase1, phase2, GeneralHealthRules} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'

const Rules1 = () => <>
	<h1>RULES: Project your mind</h1>
	<p>Step into the main room. Once at a time, each player must go up to the board and select a piece of paper from the box.</p>
	<p>Close your eyes and draw. The other players must guess what you are drawing.</p>
	<p>You have a minute and a half to draw as many as you can.</p>
	<p>You get one point for guessing correctly, and one point for each drawing that was guessed.</p>
	<p>Ghosts can use 10 ghost points to reduce someone's time to one minute</p>
	<p>Ghosts can use 30 ghost points to make someone use their non-dominant hand.</p>
	<GeneralHealthRules/>
	<p>Input 'next' when you're done</p>
</>

const Rules2 = () => <>
	<h2>RULES: Predict your future </h2>
	<p>Take one creature for your whole group.</p>
	<p>Cut the crature open and each extract a <del>noodle</del> intestine. Try not to break it.</p>
	<p>Throw the noodle onto divination paper. Try to keep the intestine as straight as possible.</p>
	<p>Win by having the longest spanning intestine</p>
	<GeneralHealthRules/>
	<p>Input 'next' when you're done</p>
</>

const Rules3 = () => <>
	<h2>RULES: Find the curse</h2>
	<p>Split up into two groups, of ghost and alive (not necessarily equal). If you are all dead/alive, split into two equal groups.</p>
	<p>Grab the lanterns off the table and make your way downstairs into the dungeon, using the lanterns to light your way.</p>
	<p>There are multiple documents. Keep searching until ONE group has found ONE document. Leave the others behind.</p>
	<p>The winning group gets 15 health/ghost points. The losing group loses 15 health/ghost points.</p>
	<p>Input 'next' when you're done</p>
</>

const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "The situation becomes more dire as time moves on.", switchImage: true},
	{text: "As our vision decreases, you must rely on other sources to find your next course of action."},
	{text: Rules2, isObject: true, input:"next"},
	{text: "Yes... there is something corrupt in the dungeon. You must find what is it."},
	{text: Rules3, isObject: true, input:"next"},
	{text: (room >= 4) ? "I recommend you regroup with your friends. It is time we discover what is wrong with this house." : "We must examine this document. I suggest you question the vampire next."},
	]
	: code == phase1 ?
	[
	{text: "Welcome to the oracle's room! It also doubles as the potions room."},
	{text: "Be very careful in this room. If you touch anything except what's on the table you will immediately die"},
	{text:"Welcome. We see all. We can reveal to you what is hidden. No secrets escape our scrutiny.", noImage: true},
	{text: "It's been quite some time since I practiced my clairvoyance. Why don't we have a game?"},
	{text: Rules1, isObject: true, input:"next"},
	{text: (room >= 4) ? "Hmm... you also seem to be quite rusty. All that clairvoyance has gotten me feeling a little tired. Why don't we retire to the dining room? I'll meet you there." : "Hmm... you also seem to be quite rusty. Well, no matter. Let us head to the vampire's cave. I'll meet you there."},
	{text: "Humans, poor humans, caught up in this mess", noImage: true },
	{text: "There is something wrong with the house. Our infinite widsom has become finite. The future is unclear yet clearly dark.", switchImage: true },
	{text: "If you wish to escape alive, we implore you to investigate. Act as our eyes and ears." },
	{text: "We wish you luck."},
	{text: "", noImage: true},
	]
	: [ {text: "Time is running out... keep searching...", switchImage: true} ]


export default dialogue