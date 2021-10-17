import React from 'react';
import {phase1, phase2, GeneralHealthRules} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'

const Rules1 = () => <>
	<h1>RULES: Time to hunt!</h1>
	<p>Each take a projectile (ball) and sit in a circle around the "prey".</p>
	<p>When you are ready, everyone must try to collect as many prey as possible by throwing their projectile into the cups.</p>
	<p>You must consume your prey before attempting to catch another. Stack your prey beside you to count the points later.</p>
	<p>IMPORTANT: Do not drink from the cup, pour the contents of the cup into your own cup and drink from there.</p>
	<p>Rats are worth 5 points</p>
	<p>Cockroaches are worth 3 points</p>
	<p>Flies are worth 1 point</p>
	<p>Spiders are worth 2 points. They have venom and make you lose 5 health points (ghosts are immune)</p>
	<p>Health potions are worth 0 points</p>
	<p>Ghosts can use 5 ghost points to force someone to sit one body behind everyone else.</p>
	<p>Input 'next' when you're done</p>
</>

const Rules2 = () => <>
	<h2>RULES: Restore the forest </h2>
	<p>Regrow the trees that were previously killed.</p>
	<p>Using the materials present, make a tree as tall as you can in five minutes.</p>
	<p>Ghosts get an extra 20 seconds.</p>
	<p>Once the trees have been built, they must wishstand the force of the wind. All other players will blow at your structure. If it falls over, lose 20 health/ghost points.</p>
	<GeneralHealthRules/>
	<p>Input 'next' when you're done</p>
</>

const Rules3 = () => <>
	<h2>RULES: Pumpkin Picking </h2>
	<p> Help pick out a new head for the skeletons in the graveyard!</p>
	<p>Firstly, go into the pumpkin patch and each find a little pumpkin.</p>
	<p>Once you each have a pumpkin, pick up one of the pumpkins in the main room off the floor and place it on your heads.</p>
	<p>When you are all ready, race to the other side of the room and back, following the instructions on the ground.</p>
	<GeneralHealthRules/>
	<p>Input 'next' when you're done</p>
</>

const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "The humans have returned... and not as corpses... what a shame...", switchImage: true},
	{text: "Make ammends? Don't make me laugh..."},
	{text: "If he really wanted to make ammends, he'd fix the damage he did to the forest!"},
	{text: Rules2, isObject: true, input:"next"},
	{text: "For your aid in regrowing the forest, we are truly in your debt."},
	{text: "However, if we enter the house in its current state, we will surely wither away."},
	{text: (room >= 4) ? "I recommend you regroup with your friends. Together you might be able to find a solution." : "I suggest you visit the oracle. They might know how to fix this situation."}
	]
	:
	[
	{text: "The cold wind of the forest never fails to give me goosebumps!"},
	{text: "Many of you live here, don't you? It's the perfect place for spiders, werewolves and the like, if I do say so myself."},
	{text: "I know, why don't we hunt?"},
	{text: Rules1, isObject: true, input:"next"},
	{text: (room >= 4) ? "Nothing like a successful hunt! I'm feeling a little tired. Why don't we retire to the dining room? I'll meet you there." : "Nothing like a successful hunt! Why don't we visit the oracle now? See what future is in store for us. I'll meet you there."},
	{text: "Sh....", noImage: true },
	{text: "How DARE he return.", noImage: true},
	{text: "Poisoning us wasn't enough! Now he's taking our food...", switchImage: true },
	{text: "What are you humans doing here?" },
	{text: "What an unfortunate situation... not that it matters to us." },
	{text: "When he discovers you, I hope he remembers to give us the scraps."},
	{text: "", noImage: true},
	]

export default dialogue