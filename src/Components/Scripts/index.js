import WitchDialogue from "./Witch"
import SkeletonDialogue from "./Skeleton"
import VampireDialogue from "./Vampire"
import WerewolfDialogue from "./Werewolf"
import GhostDialogue from "./Ghost"
import ZombieDialogue from "./Zombie"
import MiddleDialogue, { StoneQuest } from "./MiddleDialogue"
import Spider from "./Spider"
import Intro from "./Intro"


const scripts = {
	witch: WitchDialogue,
	skeleton: SkeletonDialogue,
	vampire: VampireDialogue,
	werewolf: WerewolfDialogue,
	zombie: ZombieDialogue,
	ghost: GhostDialogue,
	afterGhost: MiddleDialogue,
	spider: Spider,
	begin: Intro,
	stoneQuest: StoneQuest
}

export default scripts