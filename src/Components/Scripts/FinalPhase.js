import React from 'react';
import {guysName, itemName} from '../../App';
import skeleton from '../../resources/skeleton.jpg'
import cousin from '../../resources/cousin1.png'
import cousin2 from '../../resources/cousin2.png'
import spider from '../../resources/spider6.jpg'
import oracle from '../../resources/oracle1.jpg'
import black from '../../resources/black.jpg'

const dialogue = (code) => [
	{text: "Alright we're here and we're ready to give Marcellus a chance. Oh... he isn't looking too good.", img: skeleton},
	//{text: "Hey! It's time to party! Oh hold on, " + guysName + " isn't looking too good.", img: skeleton},
	{text: "Hrrmmmhhrmmmm"},
	{text: "Alright, explain. What's going on here?", img: skeleton},
	{text: "Press next if you have proof to convince them to be friends with " + guysName + " again", img: black},
	{text: "Let's take a look at your evidence!", img: skeleton},
	{text: "Hmm....", evidenceCheck: true, img: skeleton },
	{text: "Yes! I see! ...well... maybe I don't... who do you is responsible for all this?", input:"Morfran Grimshaw", culpritCheck: true, img: skeleton},
	{text: "Right! His cousin!", img: skeleton },
	{text: "Outrageous! My cousin has done nothing but help me these past years!"},
	{text: ("Are you sure he was helping you? Look at this will he made! And this email! He's obviously trying to steal the " + itemName + "!"), img: skeleton },
	{text: "But it can't be..."},
	{text: "..."},
	{text: "I'll summon him."},
	{text: "What's going on here!", img: cousin},
	{text: "Cousin, how do you explain all this?"},
	{text: "....", img: cousin},
	{text: "You finally figured it out! But it's too late! The curse will finish you and the scepter will be mine!", img: cousin2},
	{text: "It is not too late. With the countercurse, we will all survive.", img: oracle},
	{text: "Tell us the countercurse or else!", img: skeleton},
	{text: "Or else what?!", img: cousin2},
	{text: "We will eat you.", img: spider},
	{text: "...", img: cousin2},
	{text: "...", img: spider},
	{text: "...", img: cousin2},
	{text: "...", img: spider},
	{text: "...", img: cousin2},
	{text: "...", img: spider},
	{text: "ok", img: cousin2},
	{text: "You must take the cursed sand and pour a bunch of dragon drool in the middle. Then add a pile of dried seamonster tears on top and set it all on fire.", img: cousin2},
	{text: "Shall we eat him now?", img: spider},
	{text: "Well, he's still family..."},
	{text: "I'm taking you out of the will though!"},
	{text: "gghhmrrmmm...", img: cousin},
	{text: "hhhahhhhhhkckkkckkkkkkk"},
	{text: "Quick! You must undo the curse before it's too late!", img: oracle},
	{text: "What creature emmerges when you undo the curse?", img: oracle, input: "snake"},
	{text: "I feel two centuries younger! Thank you humans. And er... to the ones we lost on the way, you're welcome to stay here or travel the world as you please!", isEnd: true},
	{text: "Now let's party!", img: skeleton},
	{text: "Happy Halloween!"}
	]


export default dialogue