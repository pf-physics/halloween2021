import React from 'react';
import {magicCode, undeadCode} from '../../App';

const Rules1 = () => <>
<h2>RULES: Blood Time</h2>
<p>Use the tombstone cups and fill it half full with blood.</p>
Use the straws to drink the liquid as fast as possible.
<h3>Advantage: Vampires</h3>
<p>Fill the cups only one third full</p>
<h3>Disadvantage: Ghost</h3>
<p>The liquid keep falling through you! Fill the cups three quarters full</p>
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
<h2>RULES: Wake up the bats!</h2>
<p> The bats can only be woken up by certain words said like a vampire.</p>
<p> Each take a piece of paper off one of the bats. </p>
<p> Take a pair of vampire teeth. Try to say the word to google translate while wearing the teeth. You have two tries to get it to recognize the word. 5 points if you succeed.</p>
<h3>Advantage: Vampires</h3>
<p>Three tries. If you are a witch/wizard with a bat familiar, you also get this advantage.</p>
<p> Write 'bats' when you're finished </p>
</>

/*
<h3>Disadvantage: Zombies</h3>
<p>Your teeth keep falling out. Only one try.</p>
*/

const dialogue = (code) => [
	{text:"Velcome to my crypt! Please be careful with my darling baby bats. I vas just about to feed them!"},
	{text:code===undeadCode ? "its a shame you undead 'ave no blood..." : "Your blood smells quite delicious... but of course I vould never take blood from my friends!"},
	{text: "First ve must vake them up!"},
	{text: Rules3, isObject: true, input: "bats"},
	{text:"Good, now zey are avake! Von't you join me for a meal?"},
	{text: Rules1, isObject: true, input: "next"},
	{text:"Ve must go into the night! There are many delicious children out!"},
	{text:"Hm? Quiet! My child is trying to say something to me..."},
	{text:"Apparently a lot of moonlight is concentrated on the balcony. Oh! Now it's gone. Strange..."},
	{text:"Visit the Verewolf next! Fare'vell!"},
	{text:"Write 'next' when you're with the wolf", input:"next"}
	]

export default dialogue