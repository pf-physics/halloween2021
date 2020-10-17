import React from 'react';
import {magicCode, undeadCode} from '../../App';

const undead = [
	{text: "The Council of the Undead welcomes skeletons, ghosts, zombies and undead alike! We are so glad you could make it."},
	{text: "You may be wondering why we summoned you this evening. I'm sure you've noticed the moon situation..."},
	{text: "Even though the moon is full, its power is waning! The rituals and needs of witches, vampires and werewolves, the mystical, have depleted it!"},
	{text: "Because of their selfish needs, the moon is weak on the most important day of the year!"},
	{text: "But fear not, the council of the undead and the council of the mystics have convened."},
	{text: "After much arguing, we found the only way to settle this feud is with a competition. We, as well as the mystical, have set up an array of challenges in order to prove which group of creatures comes out on top!"},
	{text: "You have been chosen as the most skilled of your races. Together, you will win the challenges and get the moon back!"},
	{text: "We wish you luck, much is at stake."},
	{text: "You will visit the witch first! Get your code from the other team and visit her together. Their code is tombstone.", input:"coffin"}
]

const magic = [
	{text: "The Council of the Mystics welcomes witches, vampires, werewolves and magical alike! We are so glad you could make it."},
	{text: "You may be wondering why we summoned you this evening. I'm sure you've noticed the moon situation..."},
	{text: "Even though the moon is full, its power is waning!"},
	{text: "Our rituals and magic are reliant on the moon’s power. The undead, undoubtably jealous of our skills, are withholding the moon from us!"},
	{text: "But fear not, the council of the undead and the council of the mystics have convened."},
	{text: "After much arguing, we found the only way to settle this feud is with a competition. We, as well as the undead, have set up an array of challenges in order to prove which group of creatures comes out on top!"},
	{text: "You have been chosen as the most skilled of your races. Together, you will win the challenges and get the moon back!"},
	{text: "We wish you luck. Much is at stake."},
	{text: "You will visit the witch first! Get your code from the other team and visit her together. Their code is coffin.", input:"tombstone"}
]

const dialogue = (code) => {
	if (code===magicCode) {
		return magic
	} else if (code===undeadCode) {
		return undead
	} else return [""]
}

export default dialogue