import PumpkinDialogue from "./PumpkinPatch"
import HauntedForestDialogue from "./HauntedForest"
import Oracle from "./Oracle"
import Main from "./MainRoom"
import VampireDialogue from "./Vampire"

import WitchDialogue from "./Witch"
import SkeletonDialogue from "./Skeleton"
import WerewolfDialogue from "./Werewolf"
import GhostDialogue from "./Ghost"
import ZombieDialogue from "./Zombie"
import MiddleDialogue, { StoneQuest } from "./MiddleDialogue"
import Spider from "./Spider"
import Intro from "./Intro"
import Fight from "./FinalFight"
import Ending from "./Ending"


const scripts = {
	pumpkin: PumpkinDialogue,
	forest: HauntedForestDialogue,
	oracle: Oracle,
	mainroom: Main,
	witch: WitchDialogue,
	skeleton: SkeletonDialogue,
	vampire: VampireDialogue,
	werewolf: WerewolfDialogue,
	zombie: ZombieDialogue,
	ghost: GhostDialogue,
	afterGhost: MiddleDialogue,
	spider: Spider,
	begin: Intro,
	stoneQuest: StoneQuest,
	finalFight: Fight,
	ending: Ending
}

export default scripts

// [poisonDrops.code, goodDrops.code].sort().toString()
export const itemCombos = () =>
	{
		const combos = {}
		combos[[poisonDrops.code, goodDrops.code].sort().toString()] = "You mix the two bottles of eyedrops... not sure why you did that."

		return combos
	}


const poisonDrops =
	{ code: "eyedrops666"
	, description : "A bottle of eyedrops. The liquid smells strongly of bleach."
	, inquire: () =>
		[ {text:"Oh, my eyedrops! My vision is quite fuzzy so perhaps I shall use it."}
		, {text:"..."}
		, {text:"Hmm... didn't seem to help much."}
		]
	}

const badWill =
	{ code: "houseinsurance"
	, description : "A will. For some reason, 'house insurance' has been written at the top. "
	, inquire: () =>
		[ {text:"My house insurance? What do you want to know about that?"}
		, {text: "Times sure have changed... back in the day haunted houses didn't need insurance!"}
		, {text: "I'm lucky my cousin helped me fill it out"}
		]
	}

const goodWill =
	{ code: "goodWill"
	, description : "A will."
	, inquire: () => [ {text:"What's that? The writing is too small, I can't read it!"} ]
	}

const goodDrops =
	{ code: "123eyedrops"
	, description: "Some ordinary eyedrops"
	, inquire: (phase) =>
		phase == 3 ?
		[ {text:"Oh, my eyedrops! My vision is quite fuzzy so perhaps I shall use it."}
		, {text:"..."}
		, {text:"Huh? What's going on? Why are there random humans here?"}
		]
		:
		[ {text: "Oh, my eyedrops! My vision is quite fuzzy so perhaps I shall use it."}
		, {text:"..."}
		, {text:"That seemed to have helped quite a bit-"}
		, {text:"Hold on. What are a bunch of humans doing here?"}
		, {text:"Of course! You must be a gift from my friends! It's been a while since I ate a human!"}
		, {text:"CRONCH", dead: true}
		]
	}

export const itemList =
	[ poisonDrops
	, goodDrops
	, badWill
	, goodWill
	]