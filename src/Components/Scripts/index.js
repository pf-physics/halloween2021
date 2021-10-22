import PumpkinDialogue from "./PumpkinPatch"
import HauntedForestDialogue from "./HauntedForest"
import Oracle from "./Oracle"
import Main from "./MainRoom"
import Lounge from "./Lounge"
import flyerImg from '../../resources/Flyer.jpg'

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

import {phase4} from "../../App"


const scripts = {
	pumpkin: PumpkinDialogue,
	forest: HauntedForestDialogue,
	oracle: Oracle,
	lounge: Lounge,
	mainroom: Main,
	witch: WitchDialogue,
	skeleton: SkeletonDialogue,
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
		combos[[goodWill.code, badWill.code].sort().toString()] = "The only difference in the wills concerns the Scepter of Murrazoth and the statue of Leogra."
		combos[[goodWill.code, goodDrops.code].sort().toString()] = "Now the will is soggy..."
		combos[[scepterPage.code, letter.code].sort().toString()] = "The words on the page match the writing in the letter"		
		combos[[scepterPage.code, letter2.code].sort().toString()] = "The words on the page match the writing in the letter"

		return combos
	}


const poisonDrops =
	{ code: "eyedrops666"
	, description : "A bottle of eyedrops. The liquid smells strongly of bleach."
	, inquire: () =>
		[ {text:"Oh, my eyedrops! My vision is quite fuzzy so perhaps I shall use it."}
		, {text:"..."}
		, {text:"Hmm... didn't seem to help much."}
		, {text:"Maybe I should ask my cousin for a new prescription..."}
		]
	}

const badWill =
	{ code: "houseinsurance"
	, description : "A will. For some reason, 'house insurance' has been written at the top. "
	, hint: "Hint: Anything suspicious on his desk?"
	, inquire: () =>
		[ {text:"My house insurance? What do you want to know about that?"}
		, {text: "Times sure have changed... back in the day haunted houses didn't need insurance!"}
		, {text: "I'm lucky my cousin helped me fill it out"}
		, {text: "Speaking of him! He's started a new club and has been handing out flyers!"}
		, {text: "Take this."}
		, {text: "itemcode: Flyer"}
		]
	}

const goodWill =
	{ code: "will1"
	, hint: "Hint: Maybe someone threw out something important"
	, description : "A will."
	, inquire: () => [ {text:"What's that? The writing is too small, I can't read it!"} ]
	}

const goodDrops =
	{ code: "123eyedrops"
	, description: "Some ordinary eyedrops"
	, hint: "Marcellus can't see the evidence. Hint: If someone wants to get rid of something, the crypt is a good hiding place."
	, inquire: (phase) =>
		phase == phase4 ?
		[ {text:"Oh, my eyedrops! My vision is quite fuzzy so perhaps I shall use it."}
		, {text:"..."}
		, {text:"Egad! You were humans all along?"}
		]
		:
		[ {text: "Oh, my eyedrops! My vision is quite fuzzy so perhaps I shall use it."}
		, {text:"..."}
		, {text:"That seemed to have helped quite a bit-"}
		, {text:"Hold on. What are a bunch of humans doing here?"}
		, {text:"Of course! You must be a gift from my friends! It's been a while since I ate a human!"}
		, {text:"CRONCH", dead: "He wasn't ready for the truth. Everyone drink 4 times to continue"}
		]
	}

const flyer = //done
	{ code: "flyer"
	, description: "A flyer about some weird cult"
	, image: flyerImg
	, inquire: (phase) =>
		[ {text: "Ah yes, my cousin's club."}
		, {text: "I hope it's going well."}
		]
	}


const email = //done
	{ code: "weirdmail"
	, description: "A weird email from a weird guy"
	, hint: "Hint: Tried joining a cult recently?"
	, inquire: (phase) =>
		[ {text: "What's this? It's too small. I can't read it."}
		]
	}


const scepter = //done
	{ code: "scepterm"
	, description: "The Scepter of Murrazoth. A powerful magical item."
	, inquire: (phase) =>
		[ {text: "Ah yes, the Scepter of Murrazoth"}
		, {text: "This scepter is what prevents the evil creatures from the other side from taking over the world."}
		, {text: "It must remain in this house at all times lest the portal be opened."}
		, {text: "For such a powerful item, it is quite tacky..."}
		]
	}

const letter = //done
	{ code: "letter1"
	, description: "A letter that Marcellus DEFINITELY wrote. There's a scale glued to it."
	, inquire: (phase) =>
		[ {text: "What's this? It's too small. I can't read it."}
		]
	}

const letter2 = //done
	{ code: "fertilizer"
	, description: "An empty bag of fertilizer that smells strongly of bleach. A letter that Marcellus DEFINITELY wrote was attached to it. There's a scale glued to it."
	, inquire: (phase) =>
		[ {text: "What's this? Smells funny..."}
		]
	}

const scepterPage = //done
	{ code: "scepterpage"
	, description: "Information about the Scepter of Murrazoth. For some reason the page doesn't match the rest of the book..."
	, inquire: (phase) =>
		[ {text: "What's this? It's too small. I can't read it."}
		]
	}

const scepterPage2 = //done
	{ code: "scepterinfo"
	, description: "Information about the Scepter of Murrazoth."
	, hint: "Hint: The pumpkin patch seems like a good place to hide things"
	, inquire: (phase) =>
		[ {text: "What's this? It's too small. I can't read it."}
		]
	}

const magicBook = //done
	{ code: "magicbook"
	, description: "A book about spells, potions, creatures and relics."
	, inquire: (phase) =>
		[ {text: "This is quite a good book! I fully recommend it!"}
		, {text: "I hear a new version is coming out soon."}
		]
	}

const mysteriousDoc =
	{ code: "whitepage"
	, description: "A document with a weird aura"
	, inquire: (phase) =>
		[ {text: "Why are you bringing me rubbish?"}
		]
	}


export const itemList =
	[ poisonDrops
	, goodDrops
	, badWill
	, goodWill
	, email
	, flyer
	, scepter
	, letter
	, letter2
	, scepterPage
	, scepterPage2
	, magicBook
	, mysteriousDoc
	]



// DCDCDC make sure its right
export const minEvidence =
	[ goodDrops
	, badWill
	, goodWill
	, scepterPage2
	, email
	]