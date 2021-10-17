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


const PhaseModal = ({setPhase}) => {
	const [open, setOpen] = useState(false)
	const [val, setVal] = useState("")

	const onSubmit = () => {
  	if (phases.indexOf((val)) >= 0) {
  		localStorage.setItem(phase_key, val)
			setOpen(false)
	  	setPhase(val)
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

const Ability = ({text}) => <p><center><b><u>{text}</u></b></center></p>

const CodeModal = ({setCode, open}) => {
		const onChange = (e) => {
		setCode(e.target.value)
	}

	return <Modal
	  className="glow"
	  centered={false}
      open={open}
    >
      <Modal.Header style={{ textAlign:"center", letterSpacing:"1px", fontFamily:"scaryCandy", fontSize:"30px", backgroundColor:"black", color:"white"}}>Input Identity Code</Modal.Header>
      <Modal.Content style={{paddingBottom:"10xp", backgroundColor:"black", color:"white"}}>
        <div style={{textAlign:"center"}}><Input className="white" onChange={onChange} placeholder='Input Code' /></div>
        <Divider hidden style={{marginTop:"-3px"}}/>

      </Modal.Content>
    </Modal>
}


export const undeadCode = "spookyundead123"
export const magicCode = "mysticmagic123"

export const guysName = "Marcellus"
export const itemName = "scepter"
export const lastName = "Grimshaw"
export const evilName = "Morfran"

export const GeneralHealthRules = () =>
	<div>
		1st: Gain 10 <br/>
		2nd: Gain 0 <br/>
		3rd: Lose 10. Drink <br/>
		4th: Lose 20. Drink twice <br/>
		5th: Lose 30. Drink thrice <br/>
		Ghosts steal 5 points from each person they beat <br/>
	</div>

export const phase0 = "phase0"
export const phase1 = "phase1"
export const phase2 = "phase2"
export const phase3 = "phase3"
export const phase4 = "phase4"
const phases = [phase0, phase1, phase2, phase3, phase4]
const phase_key = "phase";

const App = ({getCode}) => {


  const room_key = "room";


  const codesToItems = () =>
  	{ var storedItems = localStorage.getItem(items_key) || []
  	  return new Set(itemList.filter(v => storedItems.includes(v.code)))
  	}

  const [Page, setPage] = useState(false)
  const [open, setopen] = useState(false)
  const [visitedRooms, setVisitedRooms] = useState(new Set())
  const [items, setItems] = useState(codesToItems())
  const [phase, setPhase] = useState(localStorage.getItem(phase_key));
  const [modalOpen, setModalOpen] = useState(phases.indexOf((phase)) < 0)
  const [dead, setDead] = useState("")
  const [returnToMain, setReturnToMain] = useState(false)

  const [code, setCode] = useState("")

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
  	, <RoomModal key="roomModal" Page={Page} setPage={updatePage}/>
  	, <PhaseModal key="phaseModal" setPhase={setPhase}/>
  	]

  const handleCode = (code) => {
  	if (phases.indexOf((code)) >= 0) {
  		localStorage.setItem(phase_key, code)
  		setModalOpen(false)
	  	setPhase(code)
  	}
  }


console.log(dead)
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
      <CodeModal open={modalOpen} setCode={handleCode}/>
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
     { phase !== phase4 && (Page ? <Page code={phase} room={Array.from(visitedRooms).filter((v) => v !== "MainRoom").length}/> : <h2>Welcome to Halloween 2021. Please enjoy the party and try not to die</h2>)}
     { phase == phase4 && <FinalPhase items={items} code={phase} setDead={setDead} room={Array.from(visitedRooms).filter((v) => v !== "MainRoom").length}/>}
    </div>
  );
}


export default App;
