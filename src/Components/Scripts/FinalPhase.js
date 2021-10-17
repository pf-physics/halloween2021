import React from 'react';
import {guysName, itemName} from '../../App';
import skeleton from '../../resources/skeleton.jpg'

const dialogue = (code) => [
	{text: "Hey! It's time to party! Oh hold on, " + guysName + " isn't looking too good.", img: skeleton},
	{text: "Hmmmhhmmmm"},
	{text: "Ah well, I'm sure he'll recover. Did you figure out who is behind everything? Did you find proof?", input: "yes", img: skeleton},
	{text: "Let's take a look at your evidence!", img: skeleton},
	{text: "Hmm....", evidenceCheck: true, img: skeleton },
	{text: "Yes! I see! ...well... maybe I don't... who do you think did it?", input:"Morfran Grimshaw", culpritCheck: true, img: skeleton},
	{text: "Right! His cousin!", img: skeleton },
	{text: "Outrageous! My cousin has done nothing but help me these past years!"},
	{text: ("Are you sure he was helping you? Look at this will he made! And this website! He's obviously trying to steal the " + itemName + "!"), img: skeleton },
	{text: "Hmm... let me call him up..."},
	{text: "..."},
	{text: "Yup. You're right. He sucks."},
	{text: "Then let's party!", img: skeleton, isEnd: true},
	{text: "Happy Halloween!", img: skeleton},
	]


export default dialogue