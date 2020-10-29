import React from 'react';

const Rules4 = () => <>
	<h2>RULES: Moon Restoration Spell! </h2>
	<p> Take the charged moon wands and head outside with the bowl. </p>
	<p> Use the moon wands to spell the word. (Don't forget the incantation.) </p>
	<p> One team goes at a time, the other team will use a phone to take a long exposure picture. </p>
	<p> If its possible, you can try to take a long exposure timed photo with everyone. </p>
	<p> 10 points to whichever looks better. </p>
	<p> Write 'moon' when you are done.</p>
	</>

const dialogue = (code) => [
	{text: "You must finish the moon restoration spell before it's too late!"},
	{text:Rules4, isObject:true, input:"moon"},
	{text:"It's time for the last part of the ritual! The werewolf pack leader now has one more task to complete. He will send the moon energy back into the sky!"},
	{text:"Input what you see", input:"fireworks"}
	]

export default dialogue