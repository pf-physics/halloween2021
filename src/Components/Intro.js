import React, {useState} from 'react';
import { Button, Input, Divider, Form } from 'semantic-ui-react'
import { Link, Redirect } from "react-router-dom";

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
      <Divider hidden/>
        <div><input onChange={onChange} placeholder='Input Code' /></div>
        <Divider hidden style={{marginTop:"-3px"}}/>
        <Button className="default" onClick={onSubmit} type="submit">Click Here</Button>
		{ success && <Redirect to={"/test"}/> }
    </div>
  );
}

export default Intro;
