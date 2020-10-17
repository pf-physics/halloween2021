import React from 'react';

const rules = () => <>
<h2>RULES:</h2>
<p>Within your teams, split into two groups (so there should be four groups total)</p>
<p> Each group will make a potion using the ingredients on the table. They must use at least _ shots of each group of ingredients as shown on the table. </p>
<p> You are allowed to smell the ingredients but you cannot taste them. </p>
<p> Once you have finished the potions everyone must take a shot of each group's potions and rank each potion from 1 to 13.</p>
<p> Each creature must take a shot glass from the table. Keep the shot glass in your bucket so as to avoid the corona curse. (You will need them for later as well)</p>
<h3>Advantage: Witches and Wizards</h3>
<p>They can taste test their potions as they go along.</p>
<h3>Disadvantage: Skeletons and Ghosts</h3>
<p>They have no noses. They are not allowed to smell anything.</p>
</>

const dialogue = (code) => [
	{text:"What a mess they made! If it were up to me I'd..."},
	{text: "Oh! Good evening dearies! I didn't notice you come in. Welcome to my humble abode!"},
	{text: "Pardon the mess, some rascals have made a mess of my books... I have a feeling some of them might be with us now..."},
	{text: "In any case! I have a task for you to prove your worth."},
	{text: "But first, why don't we see what the evening has in store for you? In the mean time, I'll try to find some of the missing pages"},
	{title: "GAME: Divination", text:"Pick a card from the pile to find your future. Follow the instructions on the paper in front of you. (Halloween king's cup)"},
	{text: "Write 'next' once you've finished the game.", input:"next"},
	{text: "Now for the real task! Every witch and wizard must know how to make a potion!"},
	{text: rules, isObject: true},
	{text: "Write 'next' once you've judged the potions.", input:"next"},
	{text: "First place gets 70 points. Second place gets 50 points. Third place gets 25 points."},
	{text: "No luck with my pages... Please keep an eye out for them. I can't stand having my creature encyclopedia incomplete!"},
	{text: "You'd better visit the skeleton upstairs. Try to get him to shut up about his graveyard."}
	]

export default dialogue