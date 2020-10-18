import React from 'react';
import {magicCode, undeadCode} from '../../App';

const Rules1 = () => <>
	<h1>RULES: Graveyard flip cup!</h1>
	<p>Put each team on onside side of the table. Line yourselves up in front of a cup.</p>
	<p>It's a relay race. Start on the left. The first two drink their cup and attemp to flip their cups onto the table. When they succeed, the next person in the row can go.</p>
	<p>If one team has fewer members, someone on the other team must drink twice.</p>
	<p>Remember the epitaph on your cup!</p>
	<p>The winning team gets 50 points!</p>
	<h2>Advantage: Skeletons</h2>
	<p>Only pour one scoop into the cup.</p>
	<h2>Disadvantage: Vampires</h2>
	<p>Vampires have difficulty drinking anything but blood. Fill the cup with three scoops.</p>
	<p>Input 'next' when you're done</p>
</>

const Rules2 = () => <>
	<h2>RULES: Don't lose your head! </h2>
	<p> Everyone pick up a pumpkin and balance it on your head. </p>
	<p> Your goal is to knock the pumpkins off the other team's head. You cannot lift your feet off the ground (you must shuffle).
	Play until the last person standing.</p>
	<h3>Advantage: Skeletons and zombies</h3>
	<p>They have detachable heads! They have a second chance if they drop their head.</p>
	<h3>Disadvantage: Werewolves</h3>
	<p>They start in the middle of the room.</p>
	<p>Input 'next' when you're done</p>
	<p>The winning person's team gets 40 points! Second player standing gets 20. Third person gets 10.</p>
	<p></p>
</>

const dialogue = (code) => [
	{text: "A thousand new graves! We will work them to the bone... then we will have more comrades..."},
	{text: code == magicCode ? "Oh magic types... I don't suppose you'd be interested in filling a few graves?" : code == undeadCode && "Welcome my undead friends!"},
	{text: code == magicCode ? "I'm joking of course! For now...." : code == undeadCode && "You're welcome to take a nap in one of the tombs if you need!"},
	{text: "Sorry for the unruly state of the graveyard. Someone upturned the graves (I bet it was some of those werewolf pups)."},
	{text: "Anf some witch or wizard has been throwing their garbage around here! Someone oughta pick it up!", input:"night"},
	{text: "For your first task, you might as well help me fix this!"},
	{text: Rules1, isObject: true, input:"next"},
	{text: "It looks much better now!"},
	{text: "Alright, on to the next task! This task was designed by the headless horseman."},
	{text: Rules2, isObject: true, input:"next"},
	{text: "That was a riot! You better be careful. It's not too late to lose your real heads..."},
	{text: "Next is the vampire! Have fun!"},
	{text: "Write 'next' when you're ready", input:"next"}
	]

export default dialogue