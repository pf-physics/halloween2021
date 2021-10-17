import React from 'react';
import {phase1, phase2, GeneralHealthRules, itemName, guysName } from '../../App';
import { Popup, Icon } from 'semantic-ui-react'


const Rules1 = () => <>
	<h1>RULES: Roulette (of some kind)</h1>
	<p>Line up around the table with your cup. Everyone fill up to the line on your cup with alcohol.</p>
	<p>Two players on opposite ends of the table will chug their drinks and flip their cup onto the table so it stands upright.</p>
	<p>Going counterclockwise, the next person must drink and flip their cup.</p>
	<p>After succeeding in flipping the cup, fill up the cup to be ready for the next round.</p>
	<p>If someone is too slow and gets lapped, they are out. Play until the last person standing.</p>
	<p>Either split the whole room into two groups and play, or have the whole group play at once (in which case, First and second place get 40, third and fourth get 30, etc)</p>
	<p>Ghosts can use 30 ghost points to increase the alcohol someone must drink to the second line.</p>
	Winner: gets 40 health/ghost points <br/>
	Second: gets 30 health/ghost points <br/>
	Third: gets 20 health/ghost points <br/>
	Third: gets 10 health/ghost points <br/>
	Fourth: gets 0 health/ghost points <br/>
	Fifth: loses 10 health/ghost points <br/>
	Sixth: loses 20 health/ghost points <br/>
	Seventh: loses 30 health/ghost points <br/>
	Eigth: loses 40 health/ghost points <br/>
	Ninth: loses 45 health/ghost points <br/>
	<p> Input 'next' when you're done </p>
</>

const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "What a lovely tour that was! But I am quite mentally tired now."},
	{text: "Let us enjoy an activity that takes less mental energy."},
	{text: Rules1, isObject: true, input:"next"},
	{text: "Thank you for the lovely evening! I had such a wonderful time."},
	{text: "It would be such a shame for us to end the evening here and..."},
	{text: "I haven't been entirely honest with you. Truthfully, my body is decaying."},
	{text: "The " + itemName + " that keeps the portal under our homes sealed has been taking its toll on me."},
	{text: "It should not be possible for a being such as myself to die but it is the price I must pay to preserve this dimension."},
	{text: "You know how the creatures are on the other side. No manners! They don't even take their shoes off when coming into your home!"},
	{text: "And of course they plan to eat all humans on this planet, which is rather annoying. I quite like reading about the schenanigans they get up to."},
	{text: "In any case. I do not have much time left. I would love for you to spend my last moments with me. It shouldn't be longer than a few months."},
	{text: "For now, I will sit and rest. Please continue to enjoy the evening without me."},
	{text: "zzz..."},
	{text: "Poor humans. Your situation remains dire. Poor " + guysName + ", soon he will die.", switchImage: true},
	{text: "If you wish to leave alive, you must close the rift between him and his friends. Then he will no longer require your presence."},
	{text: "If you find anything strange, please show us. We can see what others can't. We can reveal their secrets."},
	{text: "Good luck."},
	]
	: code == phase1 ?
	[
	{text: "What are we doing here? Resting?"}
	]
	:
	[
	{text: "Welcome friends! My vision isn't quite what it used to be, but I can still recognize your beautiful faces!"},
	{text: "I'm so glad you finally arrived! You're only several decades late..."},
	{text: "Ah well, I'm sure you've been busy!"},
	{text: "Let us eat, drink and enjoy ourselves. Skål!"},
	{text: "It has been quite some time since I made of tour of the grounds, and visited your homes. What better time than now?"},
	{text: "Although I must confess, I have been feeling rather ill lately. I'm not sure my weary limbs will survive the trip. Instead, I will astral project."},
	{text: "We are quite a large group, so why don't we split up?"},
	{text: "I have made some portals in the house to lead to each region! Let us reminisce!"}
	]

export default dialogue