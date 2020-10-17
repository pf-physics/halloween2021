import React from 'react';
import {magicCode, undeadCode} from '../../App';

const Rules1 = () => <>
<h2>RULES: Blood Time</h2>
<p>Use the tombstone cups and fill it three quarters full with blood.</p>
Use the straws to drink the liquid as fast as possible.
<h3>Advantage: Vampires</h3>
<p>Fill the cups only half full</p>
<h3>Disadvantage: Zombies</h3>
<p>Fill the cups to the top</p>
<p>1st place: 30 points, 2nd place: 20 points, 3rd place: 10 points, 4th place: 5 points</p>
<p>Write next when finished</p>
</>

const Rules2 = () => <>
<h2>RULES: Going batty</h2>
<p>Use your teeth to pull a bat down. Look at the task on the bat. If you complete the task, you get the number of points written on the bat.</p>
<p>Keep your bat for later</p>
<p> Write 'bats' when you're finished </p>
</>

const Rules3 = () => <>
<h2>RULES: A mouthful</h2>
<p>Use your teeth to pull a bat down. Look at the task on the bat. If you complete the task, you get the number of points written on the bat.</p>
<p>Take a pair of vampire teeth. Try to say the word on your bat to google translate. You have two tries to get it to recognize the word. 5 points if you succeed.</p>
<h3>Advantage: Vampires</h3>
<p>Three tries.</p>
<h3>Disadvantage: Zombies</h3>
<p>Your teeth keep falling out. Only one try.</p>
<p> Write 'bats' when you're finished </p>
</>

const dialogue = (code) => [
	{text:"Velcome to my crypt! Please be careful with my darling baby bats."},
	{text:"Zey are very thirsty! I vas just about to feed them!"},
	{text:code===undeadCode ? "its a shame you undead 'ave no blood..." : "I vould never take blood from my friends... but it smells quite delicious."},
	{text:"Von't you join me for a meal?"},
	{text: Rules1, isObject: true, input: "next"},
	{text: "That vas refreshing! Now it's time for them vake up!"},
	{text: Rules1, isObject: true, input: "bats"},
	{text:"Ve must go into the night! There are many delicious children out!"},
	{text:"Hm? Quiet! My child is trying to say something to me..."},
	{text:"Apparently a lot of moonlight is concentrated on the balcony. Oh! Now it's gone. Strange..."},
	{text:"Visit the Verewolf next! Fare'vell!"},
	{text:"Write 'next' when you're with the wolf", input:"next"}
	]

export default dialogue