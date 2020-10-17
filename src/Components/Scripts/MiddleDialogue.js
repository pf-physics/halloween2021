import React from 'react';
import {magicCode, undeadCode} from '../../App';

const Rules1 = () => <>
<h2>RULES: Prepare for the darkness</h2>
<p> Test to see who has the best skills in the dark!</p>
<p> Close your eyes and draw your creature on some paper. </p>
<p> Everyone must rate the drawings from 1 to 9. </p>
<p> Order yourselves based on the number of points you have.</p>
<p> Best drawing gets 20 points. Second best gets 10. Third gets 5.</p>
<p> Write next when you're done. </p>
</>

const Rules2 = () => <>
	<h2>RULES: Face the darkness</h2>
	<p> In the order found in the previous game, split up into three groups.</p>
	<p> Take one glow wand each. </p>
	<p> Go to the wolf's home and retrieve two plastic blankets. Then find the door to the dark one's lair. </p>
	<p> Each group has two minutes to search for the moonstones. </p>
	<p> The stones are in plain sight. You don't need to open any of the cabinets or drawers. Some might be behind furniture.</p>
	<p> Some of them will be in the cells. You can open the cells and look inside. (Don't touch anything in the cells other than the moonstones.) </p>
	<p> Take only three stones each! </p>
	<p> Each stone is worth 5 points. Black stones have more energy and are worth 10 points.</p>
	<p> Good luck.</p>
	<p> Write 'stone' when you have them.</p>
	</>

const Rules3 = () => <>
	<h2>RULES: Recharge the stones </h2>
	<p> In order to use the stones for the ritual, they must be charged with the ocean's power. Since the ocean is not nearby, you will have to make your own waves. </p>
	<p> Each team picks out two members and gives them a blanket and half the stones their group found. </p>
	<p> The rest of the two groups must take a receptacle and stand at one side of the graveyard. </p>
	<p> Those with the stones stand at the other side. They will use the blanket to throw their moonstones across the yard at their group. Their team members must catch the stones. </p>
	<p> The opposing team can also try to steal the stones. </p>
	<p> The two groups switch when the moonstones are caught. </p>
	<p> Each stone caught is worth 5 points. </p>
	<h3> Disadvantage: Witches with spider familiars </h3>
	<p> Spiders have to be careful not to get squished! Use a smaller bucket. </p>
	<p> Write 'waves' when you are done.</p>
	</>

export const DialogueAfterGhost = (code) => [
	{text:"The council is very impressed by your accomplishments."},
	{text:"They are currently t̴͓̮̠͇̹͉̯̱̣͚̳̲̭͌̓̂ͅa̸̡̛̺͇͛̃̇́͘ĺ̷̪̪͍͔͉̞̦̤̓̿͒͊̂̋̅̽̌́́̆ỹ̶̧͔͍̣̻̟̯́̊̈́̑̔́̒̀̽͐͜ȉ̷̱̀͋̓́̃̈̈́̓͘̚͝n̴̤̼̯̱̼̅̍̿́̀͌̑̏̅͝ͅg̸̡̧̺͇̉̒̐͂͑̋́͌̍̽̈̾̾̋̒ ̴̬̮̄̂̄͊̓͛͆̄̕͝t̵̛͙̟̠̾͑̑̒́̓͌͐̊̑̅̾͝h̸͉͙͍̬̙͕͔̳̅è̷̠̤̭͆͋̓͂̈́̓̒͘͝͝ ̴͚͆͑̈́͆͂͊̂͂̃͘̚r̴̠͇͕̹̤̫͚̻̟̘͗͑̇̆̃͑̈́͛͗̅̅͘̕͜͠͠ę̶̩͖̗͇̍̏͐̉͘͜s̶͍̤̪̣̤̦̪̟̙͍͍͇̀͐̈̍͑ͅͅú̷̧̼̠̠͕͓̻͙̖͈̘͍̳̞̆͗l̷̫͕̽̐̓̏͑̏͐̆͘͜͝͠ͅͅt̵̢̘̮̬̐̐͒͑̆̾̈́̌̆̀͗́ṣ̷̢̛̗̗̣̒̈́̇͊̑̅̓̉̇̃̋̏̚͜͠"},
	{text:"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"},
	{text:`P L E A S E    A W A I T    F U R T H E R     I N S T R U C T I O N S`},
	{text:"",input:"moon123"},
	{text:"It seems there is someone you must visit..."},
	{text:"Input the type of creature when you are in front of them", input:"spider"}
	]

export const StoneQuest = (code) => [
	{text:"Look for clues...", input:"danger666"},
	{text:Rules1, isObject:true, input:"next"},
	{text:Rules2, isObject:true, input:"stone"},
	{text:Rules3, isObject:true, input:"waves"}
	]

export default DialogueAfterGhost