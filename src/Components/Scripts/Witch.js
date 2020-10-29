import React from 'react';

const KingsCup = () => <>
<h2>RULES: Divination</h2>
<p>Pick a card from the pile to find your future. (Halloween King's Cup)</p>
<p>Ace- Possession (The same as waterfall)</p>
<p>Two- Witch’s brew – Take a shot</p>
<p>Three- Scary- Name three typical fears (spiders, heights, a professor) if anyone in the circle is ‘afraid’ of this, they drink</p>
<p>Four- Door- Trick or treat game, the person who draws the card must say “Trick or Treat” to another person. If the person chooses “Trick” then you both drink and the card drawer has to trick or treat with another person. If they choose “Treat” then neither drink. They must keep trick or treating until one person chooses “Treat”</p>
<p>Five- Not Alive: Everyone must dramatically fake die, the last person to do so must drink (like floor but more dramatic)</p>
<p>Six- Tricks (Question master) OR ask a player a question, they must answer something nonsensical or they drink.</p>
<p>Seven-Forbidden – Choose a word that is now forbidden to say. You can also replace this word with another word.</p>
<p>Eight- Fate- tell the story of how one of you died – (One word story game). The drawer starts by saying one word, the next person must continue  The person who “dies” must drink. (Either the first person to mess up or the person to end the story)</p>
<p>Nine- Rhyme</p>
<p>Ten – Categories</p>
<p>Jack – Make a rule (lasts until you leave this room)</p>
<p>Queen- Halloween – Everyone drinks, instead of cheers, say “Happy Halloween!”</p>
<p>King- Sting - You are stung. Point at someone else to sting. This person must point at someone else and so on and so forth until everyone is stung. The last person stung must drink.</p>
Write 'next' once you've finished the game.
</>

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
	{text: KingsCup, isObject: true, input:"next"},
	{text: "Now for the real task! Every witch and wizard must know how to make a potion!"},
	{text: rules, isObject: true},
	{text: "Write 'next' once you've judged the potions.", input:"next"},
	{text: "First place gets 70 points. Second place gets 50 points. Third place gets 25 points."},
	{text: "No luck with my pages... Please keep an eye out for them. I can't stand having my creature encyclopedia incomplete!"},
	{text: "You'd better visit the skeleton upstairs. Try to get him to shut up about his graveyard."}
	]

export default dialogue