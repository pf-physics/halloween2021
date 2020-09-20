import React from 'react';
import { Button, Input } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="App">
      <h1>WELCOME</h1>
	      <Input transparent style={{color:"orange"}} focus placeholder='Write code here' />
        <Button inverted color='orange' as={Link} to="/test">Click Here</Button>
    </div>
  );
}

export default Intro;
