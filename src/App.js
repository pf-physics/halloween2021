import React, {useState} from 'react';
import './App.css';
import { Button, Dropdown, Menu, Transition, Dimmer, Modal, Divider, Input, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const InfoModal = ({title, content}) => {
	const [open, setOpen] = useState(false)
	return <Modal
	  className="glow"
	  centered={false}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="dropdownTitle" style={{ backgroundColor:"black", color:"white", padding:"10px"}} height="100%" width="100%">{title}</div>}
    >
    <Icon style={{color:'white'}} name='close' onClick={()=>setOpen(false)}/>
      <Modal.Header style={{ textAlign:"center", backgroundColor:"black", color:"white"}}><div className="modalTitle">{title}</div></Modal.Header>
      <Modal.Content style={{paddingBottom:"10xp", backgroundColor:"black", color:"white"}}>
      <div className="modalText">
      {content}
      <p style={{color:"grey", marginTop:"10px"}}>Certain ablilities are not always applicable. (When in doubt, please ask!) If you make a mistake, a mysterious power will right things.</p>
      <p style={{color:"grey"}}> Remember to keep your abilities secret from the other team before you use them! </p>
      </div>
      </Modal.Content>
    </Modal>
}

const Ability = ({text}) => <p><center><b><u>{text}</u></b></center></p>

const Magic = [
	<InfoModal title="Werewolf" content={<div>
		<Ability text="Ability: Werewolf Bite"/>
		<p>Biting someone is a wager. At the beginning of the round, pick someone to bite. </p>
		<p>If you earn more points than them during the round, the bite will be successful and you will get 20% of their points for the round</p>
		<p>If you earn fewer points then the bite is unsuccessful and they get 20% of your points.</p>
		</div>}/>,
			<InfoModal title="Vampire" content={<div>
		<Ability text="Ability: Night Vision"/>
		<p>Vampires have strong night vision and can see in darkness.</p>
		<p>Do the task with your eyes closed and choose a member on the other team to do the same.</p>
		</div>}/>,
			<InfoModal title="Witch/Wizard" content={<div>
		<Ability text="Ability: Cast a Spell"/>
		<p>Witches/wizards have the ability to cast a spell on a teammate to give them an advantage, or on an opponent to give them a disadvantage, for the round.</p>
		<p>Casting spells come at a price! When a witch/wizard casts a spell, they must take the disadvantage for that round.</p>
		<p>They can choose a familiar for themselves: bat, cat, wolf, spider or owl!</p>
		</div>}/>
]

const Undead = [
	<InfoModal title="Zombie" content={<div>
		<Ability text="Ability: Resurrection"/>
		<p>Zombies have the ability to bring teammates back to life.</p>
		<p>Choose a teammate to give a second chance at the task. They will keep all their points from both tries.</p>
		<p>A life for a life: You must also ressurect an enemy team member to do the same.</p>
		<p style={{color:"grey"}}>hint: You can choose the best of your team and the worst of theirs to have a second chance.</p>
		</div>}/>,
			<InfoModal title="Ghost" content={<div>
		<Ability text="Ability: Haunted word"/>
		<p> Choose a word that is taboo for the duration of the game. If an enemy teammate says the word, they must drink and your team gains 5 points.</p>
		<p> If you or a teammate say the word, the other team gets 5 points.</p>
		</div>}/>,
			<InfoModal title="Skeleton" content={<div>
		<Ability text="Ability: Limb Detachement"/>
		<p> Skeletons are able to detach and reattach limbs as they please.</p>
		<p> Skeletons can remove a limb from an enemy team member for the duration of the task (remove meaning they cannot use this limb. Ie- right arm, left leg.)</p>
		<p> They must also remove the same limb from themselves. If desired, they can remove multiple limbs.</p>
		</div>}/>
]

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

const App = ({getCode}) => {

  const [open, setopen] = useState(false)
  const [modalOpen, setModalOpen] = useState(true)
  const [code, setCode] = useState("")
  const [undead, setUndead] = useState(false)

  const toggleMenu = () => setopen(!open)
  const closeMenu = () =>  setopen(false)

  const menuItems = code === undeadCode ? Undead : code === magicCode ? Magic : []

  const handleCode = (code) => {
  	setCode(code)
  	if (code === undeadCode) {
  		setUndead(true)
  		getCode(undeadCode)
  		setModalOpen(false)
  	}
  	if (code === magicCode) {
  		setUndead(false)
  		getCode(magicCode)
  		setModalOpen(false)
  	}
  }

  return (
    <div className="Everything">
      <header>
      <CodeModal open={modalOpen} setCode={handleCode}/>
		<Menu secondary style={{ marginTop: 0, marginBottom: 0 }}>
			<Menu.Menu position="right">
    	      <div style={{paddingTop:"20px", fontSize:"20px"}} className="header">
    			  Halloween 2020
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
    </div>
  );
}

export default App;
