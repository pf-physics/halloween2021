import React from 'react';
import { Image } from 'semantic-ui-react'

const Rules1 = () => <>
	<h2>RULES: Howl like a wolf!</h2>
	<p> Use the pitch app (download or use another member's phone) to use your voice to make the patterns shown below. Choose one of the patterns. You have three tries to make it.</p>
	<h3>Advantage: Werewolves</h3>
	<p>They have four tries</p>
	<h3>Disadvantage: Skeletons</h3>
	<p>They have no lungs. They get only two tries.</p>
	<p>Level 1: Regular Wolf Howl - 5 points</p>
	<Image src={require('./wolf1.png')}/>
	<p>Level 2: Wobbly Wolf Howl - 10 points</p>
	<Image src={require('./wolf2.png')}/>
	<p>Level 3: =) - 15 points</p>
	<Image src={require('./wolf3.png')}/>
	Write 'next' when you're finished
	</>

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
	{text:"Awoooooooooo"},
	{text:"Are you ready? Are you ready? It's time for my tasks! Awooooo!"},
	{text:"Are you hungry! I'm hungry! You should all go have a snack from my bowl! (One at a time, write 'next' when everyone has a snack.)", input:"next"},
	{text:"Did you see the moon? Do you know what that means? The moon is full! Awooo!"},
	{text:"Do you know what wolves do on the full moon!"},
	{text:"We go awoooooo!"},
	{text: Rules1, isObject: true, input:"next"},
	{text:"AWOOOOOOOOOOOO!"},
	{text:"What do we do after we howl?"},
	{text:"We hunt!"},
	{text:"Grab the bag of prey and head outside to start the hunt!"},
	{text: Rules2, isObject: true, input:"next"},
	{text: "That was fun wasn't it??"},
	{text: "Now its time for the next one! Go visit the zombies! AWOOOOOOOO"},
	{text: "Write 'next' when you're in the next room", input:"next"},
	]

export default dialogue