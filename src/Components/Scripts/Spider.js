import React from 'react';
import {magicCode, undeadCode} from '../../App';

const Rules1 = () => <>
	<h1>RULES: Feed the Spider!</h1>
	<p>
	Stand at the middle line on the floor and throw one of the "bugs" from the bucket into the containers in front of the spider. (You can make more "bugs" from the aluminum beside.)
	Each time you score in a bucket, you get the number of points written on the bucket. Make two people on the other team drink 4 times when you get a bug in a bucket.
	The first team to get 10 bugs in the buckets win. +20 bonus points for the winning team.
	Drink twice if you get it in the web.
	</p>
	<h2>Advantage: Zombies and ghosts</h2>
	<p> Zombies are immune to spider venom. Spider fangs miss ghosts. Stand at the closer line. Witches/wizards with a spider familar also get this advantage.</p>
	<h2>Disadvantage: Werewolves and vampires</h2>
	<p>Werewolves are afraid of spiders. Spider venom is doubly potent for vampires. Stand at the further line. If you are a witch/wizard with an owl/cat/wolf familiar you also get this disadvantage.</p>
	<p>Input 'next' when you're done</p>
</>

const Rules2 = () => <>
	<h1>RULES: Dissect the eggs!</h1>
	<p>Each pick an egg from the spider and cut it open with a knife. Extract the paper from it. If the paper you retrieve is blank, take four sips</p>
	<p>Input the secret code when you're done</p>
</>

const dialogue = (code) => [
	{text: "I know what you seek"},
	{text: "We feel the moon is weakening. Spiders also need the moon."},
	{text: "Even so, I worked hard on these eggs so I cannot give them to you for free."},
	{text: "If you feed me, I'll let you take the eggs."},
	{text: "Make no mistake, I have enough venom to kill you with one bite, then I'll have a meal for the next week."},
	{text: "Unless one of you wants to be a sacrifice, I suggest you start feeding."},
	{text: Rules1, isObject: true, input:"next"},
	{text: Rules2, isObject: true, input:"death"},
	{text: "You found the ritual? Good. I suggest you find whatever you can on that list, then go talk to the witch when you need help.", input:"gravestone"}
	]

export default dialogue