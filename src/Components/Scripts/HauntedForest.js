import React from 'react';
import {phase0, phase1, phase2, GeneralHealthRules} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'
import bats from '../../resources/bats.jpg'
import spider from '../../resources/spider6.jpg'

const Rules1 = (phase) => () => <>
	<h1>RULES: Time to hunt!</h1>
	<p>Each take a projectile (ball) and sit in a circle around the "prey".</p>
	<p>When you are ready, everyone must try to collect as many prey as possible by throwing their projectile into the cups.</p>
	<p>You must consume your prey before attempting to catch another. Stack your prey beside you to count the points later.</p>
	<p>When you catch prey, fill your cup to the line and drink before continuing.</p>
	<p>Rats are worth 5 points</p>
	<p>Cockroaches are worth 3 points</p>
	<p>Flies are worth 1 point</p>
	<p>Spiders are worth 2 points. They have venom and make you lose 5 health points (ghosts are immune)</p>
	<p>Health potions are worth 0 points</p>
	<p>Ghosts can use 5 ghost points to force someone to sit on the back line</p>
	<GeneralHealthRules phase={phase}/>
</>


const Rules2 = () => <>
	<h1>RULES: Get the bats attention!</h1>
	<p>Each grab a piece of paper and find a hard surface to write on.</p>
	<p>You will have one minute and a half to write down as much of the given paragraph as possible, upside-down.</p>
	<p>You get one point for each letter written correctly, lose one point (and drink) for each letter than is incorrect.</p>
	<p>The paragraph is:</p>
	<p>Trick or treat, smell my feet, give me something good to eat. Not too big, not too small, just the size of Montreal. If you don't, I don't care. I'll pull down your underwear.</p>
	<p>Ghosts can use 10 ghost points to reduce someone's time to one minute</p>
	<p>Ghosts can use 20 ghost points to make someone use their non-dominant hand.</p>
	<GeneralHealthRules/>
</>


const Rules3 = () => <>
	<h2>RULES: Restore the forest </h2>
	<p>Regrow the trees that were previously killed.</p>
	<p>Using the materials present, make a tree as tall as you can in four minutes.</p>
	<p>Ghosts can use 20 ghost points to force someone to use only one hand.</p>
	<p>Ghosts can use 15 ghost points to force someone to close their eyes.</p>
	<p>Once the trees have been built, they must wishstand the force of the wind. All other players will blow at your structure. If it falls over, lose 5 health/ghost points.</p>
	<GeneralHealthRules/>
</>

const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "The humans have returned... and not as corpses... what a shame...", image: spider},
	{text: "Make ammends? Don't make me laugh... get out of my sight...", image: spider},
	{text: "The spiders don't seem to want to talk, what about the bats?", noImage: true},
	{text: "...", image: bats},
	{text: Rules2, isObject: true, noImage: true},
	{text: "Geez! What do you want?"},
	{text: "We'll never forgive him! Not until he restores the forest to its former glory!"},
	{text: Rules3, isObject: true, noImage: true},
	{text: "For your aid in regrowing the forest, we are truly in your debt.", image: spider},
	{text: "However, if we enter the manor in its current state, we will surely wither away.", image: spider},
	{text: (room >= 4) ? "I recommend you regroup with your friends. Together you might be able to find a solution." : "I suggest you visit the oracle. They might know how to fix this situation.", image: spider}
	]
	: code == phase1 ?
	[
	{text: "The cold wind of the forest never fails to give me goosebumps!"},
	{text: "Many of you live here, don't you? It's the perfect place for spiders, werewolves, bats and the like, if I do say so myself."},
	{text: "I know, why don't we hunt?"},
	{text: Rules1(phase1), isObject: true},
	{text: "After playing, please put the cups back in a similar fashion (make sure rats and cockroaches are at the center and scatter the rest around them)", noImage: true},
	{text: (room >= 4) ? "Nothing like a successful hunt! I'm feeling a little tired. Why don't we retire to the dining room? I'll meet you there." : "Nothing like a successful hunt! Why don't we visit the oracle now? See what the future has in store for us. I'll meet you there."},
	{text: "Sh....", noImage: true },
	{text: "How DARE he return.", noImage: true},
	{text: "Poisoning us wasn't enough! Now he's taking our food...", switchImage: true },
	{text: "What are you humans doing here?" },
	{text: "What an unfortunate situation... not that it matters to us." },
	{text: "When he discovers you, I hope he remembers to give us the scraps."},
	{text: "", noImage: true},
	]  : code == phase0 ?
	[ {text: "", noImage: true}]
	:
	[ {text: "The manor continues to decay...", switchImage: true}]

export default dialogue