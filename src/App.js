import React, {useState} from 'react';
import './App.css';
import { Button, Dropdown, Menu, Transition, Dimmer, Modal, Divider, Input, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { sceneList } from "./index";
import { itemList, itemCombos } from "./Components/Scripts";
import { SimpleDialogue } from "./Components/MonsterPanel";
import FinalPhase from "./Components/FinalPhase";

const items_key = "items";

const ItemModal = ({phase, items, setItems, setDead}) => {
	const [open, setOpen] = useState(false)
	const [val, setVal] = useState("")
	const [item, setItem] = useState(false)
	const [comboText, setComboText] = useState("")
	const [showTo, setShowTo] = useState(false)

	const onSubmit = () => {

  	var newItem = itemList.filter((v) => v.code.toLowerCase() === val.toLowerCase())[0]
	  	if (newItem) {
			setItem(newItem)
			setItems(items.add(newItem))
			setVal("")

			localStorage.setItem(items_key, Array.from(items.add(newItem)).map(v => v.code))
	  	}
	}

	const combineItems = () => {
		if (item) {
			var key = [item.code, val].sort().toString()
			var combo = itemCombos()[key]
			combo ? setComboText(combo) : setComboText("Why'd you do that")
		}
	}

	const onChange = (e) => {
		setVal(e.target.value)
	}

	const showItem = (itm) => {
		if (showTo) {
			return <SimpleDialogue dialogue={itm.inquire(phase)} setDead={setDead} setShowTo={setShowTo}/>
		} else {
		return <div className="dialogueText">
		<p>{itm.description}</p>
		{itm.image && <img src={itm.image}/>}
		<p>{comboText}</p>
		<div style={{display: "flex"}}>
			<Button onClick={combineItems} style={{marginBottom:"10px", marginRight: "5px"}} className="default spookButton">Combine</Button>
			<Input className="intro" onChange={onChange} placeholder='Item Code' />
		</div>
		<Button style={{marginBottom:"10px"}} onClick={() => setShowTo(true)} className="default spookButton">Show to {guysName}</Button>
	  	<Button className="default spookButton" onClick={() => setItem(false)}>New Item</Button>
		</div>
	}
}

	return <Modal
	  className="glow"
	  centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="dropdownTitle" style={{ backgroundColor:"black", color:"white", padding:"10px"}} height="100%" width="100%">Items</div>}
    >
    <Icon style={{color:'white'}} name='close' onClick={()=>setOpen(false)}/>
      <Modal.Header style={{ textAlign:"center", backgroundColor:"black", color:"white"}}><div className="modalTitle">Items</div></Modal.Header>
      <Modal.Content style={{paddingBottom:"10xp", backgroundColor:"black", color:"white"}}>
	  <div style={{textAlign: "center"}}>
      <div className="dialogueText" style={{ color: "white" }}>
      	<div>
		{ !showTo && Array.from(items).map(i =>
			<p className={item.code == i.code ? "glow" : ""} style={{padding: "5px", borderRadius: "10px", margin: "0px"}}
				onClick={() => {setItem(i); setComboText("")}} key={i.code}>{i.code}</p>
			)
      	}
      	</div>
      	<div style={{ paddingTop: "30px" }}>
		  { item && showItem(item)}
      	</div>
	  </div>
      {!item &&
      	<div>
      		<div><Input className="intro" onChange={onChange} placeholder='Item Code' /></div>
	        	<Divider hidden style={{marginTop:"-3px"}}/>
	        <Button className="default spookButton" onClick={onSubmit} type="submit">Enter Item</Button>
	 	</div>
	  }
	  </div>
      </Modal.Content>
    </Modal>
}

const guessingWords =
	[ "Vampire", "Potion", "Wizard", "Tombstone", "Pumpkin", "Spiderweb"
	, "Scarecrow", "Skeleton", "Graveyard", "Cemetery", "Poltergeist"
	, "Cauldron", "Werewolf", "Chocolate", "Haunted", "Halloween", "Spooky", "Goblin"
	]

const HealthPotionModal = () => {
	const [open, setOpen] = useState(false)
	const [word, setWord] = useState("")
	const [potion, setPotion] = useState("")

	const getWord = () =>
	  guessingWords[Math.floor(Math.random() * (guessingWords.length) )];

	const p1 = ["S","H","R","P"]
	const p2 = ["A","I","E"]
	const p3 = ["M","N","B","D","T"]
	const p4 = ["O","U","Y"]

	const getPotion = () => {
		setWord(getWord())
		var po = p1[Math.floor(Math.random() * (p1.length) )] 
			+ p2[Math.floor(Math.random() * (p2.length) )]
			+ p3[Math.floor(Math.random() * (p3.length) )]
			+ p4[Math.floor(Math.random() * (p4.length) )]
		setPotion(po)
	}


	return <Modal
	  className="glow"
	  centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="dropdownTitle" style={{ backgroundColor:"black", color:"white", padding:"10px"}} height="100%" width="100%">Health Potion</div>}
    >
    <Icon style={{color:'white'}} name='close' onClick={()=>setOpen(false)}/>
      <Modal.Header style={{ textAlign:"center", backgroundColor:"black", color:"white"}}><div className="modalTitle">Health Potion</div></Modal.Header>
      <Modal.Content style={{paddingBottom:"10xp", backgroundColor:"black", color:"white", textAlign: "center"}}>
		<div className="dialogueText" style={{ color: "white", fontSize: "25px" }}>
	      	<p>To use a health potion, go to the potion room.</p>
	      	<p>Generate a magic word to say to make the potion work. (If you've used the word before, reroll)</p>
	      	<p>Put two marshmallows in your mouth and say the word to google translate. You have three tries to get it right. If you succeed, roll two extra dice to add to your health.</p>
	      	<p>To make the potion - If your word is XYZW, in your own cup add one shot of X, add half a spoon of Y, add a shot of Z, add four drops of W. Mix with toothpick</p>
	      	{word && <p>Your word is {word}</p>}
			{potion && <p>Your potion is {potion}</p>}
  	  	</div>
	        <Divider hidden style={{marginTop:"-3px"}}/>
	        <Button className="default spookButton" onClick={getPotion} type="submit">Get Potion</Button>
      </Modal.Content>
    </Modal>
}


const PhaseModal = ({setPhase, setRooms}) => {
	const [open, setOpen] = useState(false)
	const [val, setVal] = useState("")

	const onSubmit = () => {
	const newPhase = val.toLowerCase()
  	if (phases.indexOf((newPhase)) >= 0) {
  		localStorage.setItem(phase_key, newPhase)
			setOpen(false)
	  	setPhase(newPhase)
	  	setRooms(new Set())
  	}
	}

		const onChange = (e) => {
		setVal(e.target.value)
	}


	return <Modal
	  className="glow"
	  centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="dropdownTitle" style={{ backgroundColor:"black", color:"white", padding:"10px"}} height="100%" width="100%">Update Phase</div>}
    >
    <Icon style={{color:'white'}} name='close' onClick={()=>setOpen(false)}/>
      <Modal.Header style={{ textAlign:"center", backgroundColor:"black", color:"white"}}><div className="modalTitle">Update Phase</div></Modal.Header>
      <Modal.Content style={{paddingBottom:"10xp", backgroundColor:"black", color:"white", textAlign: "center"}}>
      <div><Input className="intro" onChange={onChange} placeholder='Phase Code' /></div>
	        <Divider hidden style={{marginTop:"-3px"}}/>
	        <Button className="default spookButton" onClick={onSubmit} type="submit">Click Here</Button>
      </Modal.Content>
    </Modal>
}

const RoomModal = ({Page, setPage}) => {
	const [open, setOpen] = useState(false)
	const [val, setVal] = useState("")

	const onSubmit = () => {
		setPage(val)
		setOpen(false)
	}

		const onChange = (e) => {
		setVal(e.target.value)
	}


	return <Modal
	  className="glow"
	  centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="dropdownTitle" style={{ backgroundColor:"black", color:"white", padding:"10px"}} height="100%" width="100%">Change Rooms</div>}
    >
    <Icon style={{color:'white'}} name='close' onClick={()=>setOpen(false)}/>
      <Modal.Header style={{ textAlign:"center", backgroundColor:"black", color:"white"}}><div className="modalTitle">Change Rooms</div></Modal.Header>
      <Modal.Content style={{paddingBottom:"10xp", backgroundColor:"black", color:"white", textAlign: "center"}}>
      <div><Input className="intro" onChange={onChange} placeholder='Where are you?' /></div>
	        <Divider hidden style={{marginTop:"-3px"}}/>
	        <Button className="default spookButton" onClick={onSubmit} type="submit">Click Here</Button>
      </Modal.Content>
    </Modal>
}


const GhostModal = () => {
	const [open, setOpen] = useState(false)



	return <Modal
	  className="glow"
	  centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="dropdownTitle" style={{ backgroundColor:"black", color:"white", padding:"10px"}} height="100%" width="100%">Ghost Info</div>}
    >
    <Icon style={{color:'white'}} name='close' onClick={()=>setOpen(false)}/>
      <Modal.Header style={{ textAlign:"center", backgroundColor:"black", color:"white"}}><div className="modalTitle">Ghost Info</div></Modal.Header>
      <Modal.Content style={{paddingBottom:"10xp", backgroundColor:"black", color:"white", textAlign: "center"}}>
      <div className="dialogueText" style={{ color: "white" }}>
      	<p>If you die you become a ghost.</p>
      	<p>There is a strange magic in the house keeping you tethered to it. If you're going to spend all of eternity in this house, you might as well have friends!</p>
      	<p>Your goal is now to win all the games, forcing the rest of your friends to lose health so they will join you in the house forever!</p>
      	<p>Rather than health, you will now have ghost points. You start with 10 ghost points. You can spend these points in order to make other player's lives more miserable.</p>
      	<p>You become more powerful with more ghost points:</p>
      	<p>If you have 30 ghost points (+ cost of spell) you can affect 2 people for the price of one but you must also take the penalty</p>
      	<p>If you have 50 ghost points (+ cost of spell) you can affect 2 people, or 3 people for the price of one but you must also take the penalty</p>
      	<p>If you have 75 ghost points (+ cost of spell) you can affect 3 people, or 4 people for the price of one but you must also take the penalty</p>
  	  </div>
      </Modal.Content>
    </Modal>
}


const Ability = ({text}) => <p><center><b><u>{text}</u></b></center></p>

export const undeadCode = "spookyundead123"
export const magicCode = "mysticmagic123"

export const guysName = "Marcellus"
export const itemName = "scepter"
export const lastName = "Grimshaw"
export const evilName = "Morfran"

export const GeneralHealthRules = ({phase}) =>
	{
		if (phase == phase1)
			return <div>
				1st: Gain 10 health/ghost points<br/>
				2nd: Gain 0 <br/>
				3rd: Lose 10 health/Lose 5 ghost points. Drink <br/>
				4th: Lose 20 health/Lose 10 ghost points. Drink twice <br/>
				5th: Lose 30 health/Lose 15 ghost points. Drink thrice <br/>
				Ghosts steal 5 points from each person they beat <br/>
			</div>
		else
			return <div>
				1st: Gain 10 health/ghost points<br/>
				2nd: Gain 0 <br/>
				3rd: Lose 10 health/Lose 3 ghost points. Drink <br/>
				4th: Lose 15 health/Lose 6 ghost points. Drink twice <br/>
				5th: Lose 20 health/Lose 10 ghost points. Drink thrice <br/>
				Ghosts steal 5 points from each person they beat <br/>
			</div>
	}

export const phase0 = "phase0"
export const phase1 = "phase1"
export const phase2 = "phase2"
export const phase3 = "phase3"
export const phase4 = "phase4"
const phases = [phase0, phase1, phase2, phase3, phase4]
const phase_key = "phase";
const health_key = "health";

const App = () => {


  const room_key = "room";


  const codesToItems = () =>
  	{ var storedItems = localStorage.getItem(items_key) || []
  	  return new Set(itemList.filter(v => storedItems.includes(v.code)))
  	}

  const handleCode = (code) => {
  	if (phases.indexOf((code)) >= 0) {
  		localStorage.setItem(phase_key, code)
	  	return code
  	} else {
  		return phase0
		}
  }

  const [Page, setPage] = useState(false)
  const [open, setopen] = useState(false)
  const [visitedRooms, setVisitedRooms] = useState(new Set())
  const [items, setItems] = useState(codesToItems())
  const [phase, setPhase] = useState(handleCode(localStorage.getItem(phase_key)));
  const [modalOpen, setModalOpen] = useState(phases.indexOf((phase)) < 0)
  const [dead, setDead] = useState("")
  const [returnToMain, setReturnToMain] = useState(false)

  const updatePage = (val) => {
  	var scene = sceneList.filter((v) => v.name.toLowerCase() === val.toLowerCase())[0]
  	if (scene) {
		scene && setPage(scene.render)
		scene && localStorage.setItem(room_key, scene.name)
		scene && setVisitedRooms(visitedRooms.add(scene.name))
		return scene
  	}
	return false
  }

  !Page && updatePage(localStorage.getItem(room_key) || "")

  const toggleMenu = () => setopen(!open)
  const closeMenu = () =>  setopen(false)

  const menuItems =
  	[ <ItemModal setDead={setDead} phase={phase} key="itemModal" items={items} setItems={setItems} title = "Use Item"/>
  	, <HealthPotionModal key="healthPotionModal" />
  	, <RoomModal key="roomModal" Page={Page} setPage={updatePage}/>
  	, <PhaseModal key="phaseModal" setPhase={setPhase} setRooms={setVisitedRooms}/>
  	, <GhostModal key="ghostModal"/>
  	]

  if (dead)
  	return(
  	<div className="Everything">
  	<div style={{paddingTop:"50px"}} className="dialogueText">
		<h1>YOU DIED</h1>
		<h2>{dead}</h2>
		</div>
	</div>
  	)

  return (
    <div className="Everything">
      <header>
		<Menu secondary style={{ marginTop: 0, marginBottom: 0 }}>
			<Menu.Menu position="right">
    	      <div style={{paddingTop:"20px", fontSize:"20px"}} className="header">
    			  Halloween 2021
	      	</div>
			</Menu.Menu>
            <Menu.Item position="right" style={{ color: "white" }} icon="bars" onClick={toggleMenu} />
        </Menu>
    	  <Transition.Group animation="slide down">
                { open &&
                    <div style={{ position:"absolute", top: "56px", width:"100%", zIndex: 999 }}>
                        <Menu borderless position="right" vertical fluid>
                        	{menuItems}
                        </Menu>
                    </div>
                }
            </Transition.Group>
            <Transition.Group animation="fade">
                { open &&
                    <Dimmer.Dimmable dimmed as="div" style={{ position: "absolute", top: "50px", width: "100%", zIndex: 998, height: "100vh" }}>
                        <Dimmer active onClickOutside={closeMenu} />
                    </Dimmer.Dimmable>
                }
            </Transition.Group>
      </header>
     {returnToMain && <h2> It seems as though you have visited all the rooms. Perhaps it is wise to return to the main room for now. Don't forget to keep an eye out for clues. Use a health potion if you've found one </h2>}
     { phase !== phase4 && (Page ? <Page code={phase} room={Array.from(visitedRooms).filter((v) => v !== "MainRoom").length}/> : <h2 style={{paddingTop: "30px"}}>Welcome to Halloween 2021. Please enjoy the party and try not to die</h2>)}
     { phase == phase4 && <FinalPhase items={items} code={phase} setDead={setDead} room={Array.from(visitedRooms).filter((v) => v !== "MainRoom").length}/>}
    </div>
  );
}


export default App;
