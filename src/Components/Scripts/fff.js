import React from 'react';

const Rules1 = () => <>
<h2>RULES: Show your brains! </h2>
<p>Sit in a circle on the floor. Place the brain in the center.</p>
<p> One of you will suddenly become possessed and start asking trivia questions. </p>
<p> Grab the brain from the center if you think you know the right answer. (5 points for each correct answer) </p>
<h3>Advantage: Zombies</h3>
<p>Place the brain closer to where the zombie is sitting</p>
<p>Input 'brains' when you've finished</p>
</>

const Rules2 = () => <>
<h2>RULES:</h2>
<p>Split up into two groups, with equal (approx) members of each team in them. (2 magics and 3 undead) + (3 magics and 2 undead).</p>
<p> One group will sit on the couch and start by watching.</p>
<p> The other group needs to find a computer, go to youtube and go to 'watch?v=ayufd3o8wHA'. Follow the instructions. </p>
<p> The members sitting will rate each of the others from 1 to 5. </p>
<p> After the video, switch out for the other members. Now the first group will sit and judge.</p>
<p> The person with the most votes gets 25 points, second gets 20, third gets 15, fourth get 10, fifth get 5</p>
<p>Input 'brains' when you've finished</p>
</>

const dialogue = (code) => [
	{text:"You've finally arrived! What was that wolf making you do?"},
	{text: "You know what? I don't want to know!"},
	{text: "What were you expecting me to be a mindless oaf? Typical..."},
	{text: "After consuming so many brains, we are the smartest of all species!"},
	{text: "Don't believe me? Well then, I'll show you!"},
	{text: Rules1, isObject: true, input:"brains"},
	{text: "Hmph. I guess you're not completely stupid... But you still have a lot to learn about zombies!"},
	{text: "Do you have any idea how difficult it is for a hoard of zombies to coordinate? I'll give you a taste..."},
	{text: Rules2, isObject: true, input:"brains"},
	{text: "That was terrible. Even the zombie in your group couldn't save you! You'd all make terrible zombies..."},
	{text: "Well my tasks are over, thank goodness. Go to the ghost next. Go on. Shoo!"},
	{text: "Write 'ghost' when you're ready", input: 'ghost'},
	]

export default dialogue