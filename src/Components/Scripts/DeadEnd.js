import React from 'react';
import {phase0, phase1, phase2, GeneralHealthRules, guysName} from '../../App';
import { Popup, Icon } from 'semantic-ui-react'
import host2 from '../../resources/host_dead.jpg'

const dialogue =
	[{text: "Friends... I am feeling quite tired... I-"},
	{text: "hhaacckk hhhhhhaakckkkck kckkkckk"},
	{text: "..."},
	{text: "!", image: host2},
	{text: "Oh! I'm a ghost now! I can see again!", image: host2},
	{text: "Hold on, I don't know you people!", image: host2},
	{text: "Well... I did have a nice time with you though...", image: host2},
	{text: "Since we are all dead, why don't we continue this party? For all eternity!", image: host2},
	{text: "It could have been worse", dead: "Well. It could have been worse. The winners of the game are the original ghosts of each group! Everyone else must take a shot. To continue the game, the original ghosts can revive themselves as humans (or choose someone else if they like being a ghost)."}
	]

export default dialogue