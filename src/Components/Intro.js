import React, {useState} from 'react';
import { Button, Input, Divider, Form } from 'semantic-ui-react'
import { Link, Redirect } from "react-router-dom";
import {sceneList} from "../index"

const Intro = () => {
	const secretCode = 12345

	const [val, setVal] = useState("")
	const [success, setSuccess] = useState(false)

	const onSubmit = () => {
		if (val == secretCode) {
			setSuccess(true)
		}
	}

	const onChange = (e) => {
		setVal(e.target.value)
	}

  return (
    <div className="App">
    <Divider/>
      <h1>WELCOME</h1>
      <h2>ARE YOU READY FOR SPOOKS?</h2>
      <p>It is time... for your destiny</p>
      <Divider hidden/>
        <div><Input className="white" onChange={onChange} placeholder='Input Code' /></div>
        <Divider hidden style={{marginTop:"-3px"}}/>
        <Button className="default" onClick={onSubmit} type="submit">Click Here</Button>
		{ success && <Redirect to={sceneList[0].path} sceneIndex={0}/> }
    </div>
  );
}

export default Intro;
