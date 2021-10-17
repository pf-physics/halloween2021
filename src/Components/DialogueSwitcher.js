import React, {useState, useEffect} from 'react';
import { Button, Input, Divider, Form } from 'semantic-ui-react'
import { Link, Redirect } from "react-router-dom";
import {sceneList} from "../index"


const Intro = () => {
	const secretCode = "HALLOWEENTIME"

	const [val, setVal] = useState("")
	const [Page, setPage] = useState(false)

	const onSubmit = () => {
		var scene = sceneList.filter((v) => v.name === val)[0]
		setPage(scene.render)
	}

		const onChange = (e) => {
		setVal(e.target.value)
	}


	console.log(Page)

  return (
  	<div className="App">
    <Divider/>
      <div className="intro">
	      <h1>WELCOME</h1>
	      <h2>ARE YOU READY FOR SPOOKS?</h2>
	      <Divider hidden/>
	        <div><Input className="intro" onChange={onChange} placeholder='Where are you?' /></div>
	        <Divider hidden style={{marginTop:"-3px"}}/>
	        <Button className="default spookButton" onClick={onSubmit} type="submit">Click Here</Button>
			{ Page && <Page/>}
		</div>
    </div>
  );
}

export default Intro;
