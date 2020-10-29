import React from 'react';
import { Image } from 'semantic-ui-react'

const Rules2 = () => <>
	<h2>RULES: Hunt like wolf!</h2>
	<p> One team each take one prey (candy bar) and hide it outside. You have two minutes to hide. Then the next team will go outside and try to find the candy
	(two minutes to find). Gather the bars that weren't found before the next round of hiding. Werewolves choose which team goes first.</p>
	<h3>Advantage: Werewolves</h3>
	<p>They have an extra 30 seconds to hunt/search</p>
	<h3>Disadvantage: Zombies</h3>
	<p> Hard to be sneaky when your limbs keep falling off. 1.5 minutes to search/hide</p>
	<p>Each found bar is worth 5 points.</p>
	Write 'next' when you're finished
	</>

const dialogue = (code) => [
	{text:"You did it! The moon has regained its power!"},
	{text:"In your honor, the council has decided to throw you a great Halloween party!"},
	{text:"Turns out this competition wasn't needed after all... But since we did it, we will give a reward to the winning team!"},
	{text:"Now enjoy the party!"},
	{text: "HAPPY HALLOWEEN!!!"},
	]

export default dialogue