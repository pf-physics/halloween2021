import React from 'react';
import {phase0, phase1, phase2, GeneralHealthRules} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'

const Rules1 = () => <>
	<h1>RULES: Spiderweb cleanup!</h1>
	<p>Each grab a "magic wand" from the floor. Line yourselves up around the ledge and get ready to clean up.</p>
	<p>At the same time, try to get as many metal bits as possible. The player with the most wins.</p>
	<p>If your magnet gets stuck to another player's, lose 5 health/ghost points each</p>
	<p>Ghosts can use 5 ghost points to "shorten" a player's reach (wind the wand string to the length of their arm)</p>
	<GeneralHealthRules phase={phase1}/>
	<p>Input 'next' when you're done</p>
</>

const Rules2 = () => <>
	<h2>RULES: Enter the Crypt </h2>
	<p>One by one, you must enter the crypt.</p>
	<p>Spelunkers have previously entered this crypt. The survivors have left a rope to lead you to the correct stones.</p>
	<p>The inhabitants of the crypt do not like intruders. You have two minutes to find the stone before they attack you. Players outside should give the player inside a 5 seconds warning.</p>
	<p>Keep an eye out for clues</p>
	<p>Lose 15 health or ghost points if you do not make it out in time.</p>
	<p>Ghosts can use 10 ghost points to reduce a player's time to 1.5 minutes</p>
	<p>Input 'next' when you're done</p>
</>

const Rules3 = () => <>
	<h2>RULES: Pumpkin Picking </h2>
	<p>Help pick out a new head for the skeletons in the graveyard!</p>
	<p>Firstly, go into the pumpkin patch and each find a little pumpkin in the vines (small paper pumpkins). Keep an eye out for clues and health potions (max 2 health potions per group)</p>
	<p>Once you each have a pumpkin, pick up one of the pumpkins in the main room off the floor and place it on your heads.</p>
	<p>The ritual for turning a pumpkin into a skeleton head is quite complicated!</p>
	<p>When you are all ready, race to the other side of the room and back, following the instructions on the ground.</p>
	<GeneralHealthRules/>
</>

const dialogue = (code, room) =>
	code == phase2 ?
	[{text: "You lot are back again. I'm surprised to see you're still hanging around...", switchImage: true},
	{text: "There's no way I can forgive that guy when he hasn't even tried to fix the damage he's done!"},
	{text: "But I suppose if you help instead, I could do you a favour and talk to him..."},
	{text: "Firstly, he threw my precious stones into the crypt! Normally I don't have a problem going there myself but... my relatives in there are always hounding on me for no reason!"},
	{text: Rules2, isObject: true, input:"next"},
	{text: "If you retrieved a silver stone, gain 10 health or ghost points. If you retrieved a cursed black or white stone, lose 10 health or ghost points. Lose 5 points if you came out empty handed."},
	{text: "I hope my folks didn't give you too hard of a time."},
	{text: "Now, I need you to help my friends! They're too shy to come out and play without a head. After he squashed them all, they haven't even left their graves!"},
	{text: Rules3, isObject: true},
	{text: "Alright, alright, I guess I owe you now. Except, I may have lied a little..."},
	{text: "There is something wrong with the house. I'm not setting foot in there until the weirdness is fixed."},
	{text: (room >= 4) ? "Try to meet up with your friends. Together you might be able to fix things." : "If you want to fix things here, I suggest you go to the forest next. The creatures there really have it out for him."}
	]
	: code == phase1 ?
	[
	{text: "Ah, it's always nice to take a walk in the pumpkin patch! The smell of the swamp! The sight of the graves! Er... which one was yours again?"},
	{text: "Well, nevermind. Let us look over the spiderwebs- oh. It's quite messy here. We ought to clean it up!"},
	{text: Rules1, isObject: true, input:"next"},
	{text: (room >= 4) ? "I'm feeling a little tired. Why don't we retire to the dining room? I'll meet you there." : "Now that's much better! Why don't we go to the forest next? I'll meet you there"},
	{text: "...", noImage: true },
	{text: "That old man has a lot of nerve coming back here after what he did to me...", switchImage: true },
	{text: "So what are a bunch of humans doing here?", switchImage: true},
	{text: "A dinner party?! And he thinks you're his friends! Hah! He's really gone senile."},
	{text: () => <p>"Well, it's his own fault for driving us all away! Making a mess of my graveyard... and writing that mean <b style={{color:"#0084ac"}}>letter</b>..."</p>, isObject: true,},
	{text: "And what did he do to my spiderweb! That was art, y'know! You'd better throw that metal back in there!"},
	{text: "I doubt you'll survive the evening, so maybe I'll see you later when you're a ghost."},
	{text: "(Don't forget to put the metal pieces back in the web for the next group)", noImage: true},
	{text: "", noImage: true},
	] : code == phase0 ?
	[ {text: "", noImage: true}]
	:
	[ {text: "Have you solved all the house's issues yet? You're welcome to look around if you think it'll help.", switchImage: true} ]

export default dialogue