
import React from 'react';
import {phase0, phase1, phase2, GeneralHealthRules} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'

const Rules1 = () => <>
	<h1>RULES: Speak to the bats</h1>
	<p>Each grab a piece of paper and find a hard surface to write on.</p>
	<p>You will have one minute and a half to write down as much of the given paragraph as possible, upside-down.</p>
	<p>You get one point for each letter written correctly, lose one point (and drink) for each letter than is incorrect.</p>
	<p>The paragraph is:</p>
	<p>Trick or treat, smell my feet, give me something good to eat. Not too big, not too small, just the size of Montreal. If you don't, I don't care. I'll pull down your underwear.</p>
	<p>Ghosts can use 10 ghost points to reduce someone's time to one minute</p>
	<p>Ghosts can use 30 ghost points to make someone use their non-dominant hand.</p>
	<GeneralHealthRules/>
	<p>Input 'next' when you're done</p>
</>

const Rules2 = () => <>
	<h2>RULES: Reenact </h2>
	<p>One at a time, go up and pick a movie from the box.</p>
	<p>If the paper has the name of one of your group members, put it back and choose another.</p>
	<p>You have one minute and a half to act as many as you can (up to four)</p>
	<p>You get one point for guessing correctly, and one point for each movie that you guess correctly.</p>
	<p>Ghosts can use 10 ghost points to reduce someone's time to one minute</p>
	<GeneralHealthRules/>
	<p>Input 'next' when you're done</p>
</>


const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "You've returned! And your blood... is worse than before...", switchImage: true},
	{text: "You want to make ammends? Well, we suppose that the incident did occur long ago..."},
	{text: "But we got so sick that we missed the premieres of many movies!"},
	{text: Rules2, isObject: true, input:"next"},
	{text: "That was terrible. We'll give you points for the effort."},
	{text: "If he promises to serve proper blood, we will join his dinner party." },
	{text: "But we cannot go yet. There is something wrong with the house. If we fly inside, our wings will surely rot off. Fix what is wrong with the house and we will be there." },
	{text: (room >= 4) ? "Perhaps the other humans have figured something out. Why don't you join them?" : "We were easy to win over, but I doubt the skeletons in the pumpkin patch will be as kind. Good luck."},
	]
	: code == phase1 ?
	[
	{text: "Welcome to the vampire's cave."},
	{text: "Hello, young bat-lings!"},
	{text: "..."},
	{text: "Hmm... they are quite quiet. Perhaps they did not hear me."},
	{text: "No matter, we can talk to them in a different way!"},
	{text: Rules1, isObject: true, input:"next"},
	{text: "Hmph! Still no response! They weren't as rude the last time I was here."},
	{text: (room >= 4) ? "I'm feeling a little tired. Why don't we retire to the dining room? I'll meet you there." : "Nevermind the bats. Let us visit the pumpkin patch instead. I'll meet you there."},
	{text: "Fresh human blood... is this his apology?", switchImage: true },
	{text: "Eugh. Your blood contains alcohol. We are too young to consume this. First the rotten blood, now this! Is he trying to poison us a second time?" },
	{text: "He believes you to be his friends? How sad." },
	{text: "Why don't you stick around a little longer? We'd be happy to have you as guests as soon as your blood alcohol content goes down..."},
	{text: "Before moving to the next room, each (secretly) write down the name of two famous movies on two pieces of paper and put them in the box. Also write your name on the paper.", noImage: true}
	] : code == phase0 ? [ {text: "", noImage: true} ] :
	[ {text: "Is it time for blood? No? Well wake us up when it is!", switchImage: true} ]

export default dialogue