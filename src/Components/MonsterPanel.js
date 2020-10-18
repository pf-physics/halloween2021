import React, { useState } from 'react';
import { Button, Image, Divider, Grid, Input } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import { sceneList } from "../index"

// TODO - back button
// ...music...
const MonsterPanel = ({ color, dialogue, sceneIndex,
    image="",
    music="",
    name, code }) => {

    const findNextScene = () => {
        if (sceneIndex) return sceneIndex

        return sceneList.indexOf(sceneList.filter(x => x.name === name).pop()) + 1
    }

    const [nextScene, setNextScene] = useState(findNextScene())
    const [input, setInput] = useState(dialogue[0].input)
    const [ans, setAns] = useState("")

    const [index, setIndex] = useState(0)
    const [redirect, setRedirect] = useState(false)

    const handleBack = () => {
        if (index >= 1) {
            setIndex(index-1)
            if (input) {
                setInput(false)
            }
        }
    }

    const handleClick = () => {

        if (input && ans !== dialogue[index].input) {
            return
        }

        if (index + 2 > dialogue.length) {
            if (nextScene < sceneList.length) {
                setRedirect(true)
            }
        } else {
            if (dialogue[index + 1].input) {
                setInput(true)
            } else {
                setInput(false)
            }

            setIndex(index + 1)
        }
    }

    const Words = dialogue[index].text
    const isObject = dialogue[index].isObject

    return (<div style={{ margin: "10px" }} className="Center">
                <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
        <Grid className="dialogue glow" columns="2" style={{ backgroundColor: color }} stackable>
            <Grid.Column style={{ width:"300px", overflow: "hidden"}}>
                    <Image size="small" src={image} wrapped ui={false} />
          </Grid.Column>
          <Grid.Column width="12" verticalAlign="middle" textAlign="left">
                <div className="dialogueText" style={{ color: "white" }}>
                    <p><center><u>{dialogue[index].title}</u></center></p>
                    <p>{isObject ? <Words/> : Words}</p>
                </div>
                <Divider hidden />
            </Grid.Column>

            <Grid.Row textAlign="center" >
                <Grid.Column textAlign="center" width="100%">
                    <div width="100%" style={{ textAlign: "right", paddingRight: "20px", paddingLeft: "20px" }}>
                    {input && <Input className={color=="#000000" ? "white" : "answer"} onChange={(e) => setAns(e.target.value.toLowerCase())} style={{ width:"100%"}} placeholder={"Write answer"} />}
                    </div>
                </Grid.Column>
            </Grid.Row>
                    <Divider hidden/>
            <Grid.Row>
                <Grid.Column style={{width:"50%"}}>
                        <Button className="spookButton" style={{width:"100%", height:"50px"}} color="black" size="large" inverted onClick={handleBack}> Back </Button>
                </Grid.Column>
                <Grid.Column>
                        <Button className="spookButton" style={{width:"100%", height:"50px"}} color="black" size="large" inverted onClick={handleClick}> Next </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <iframe style={{opacity:0}} width="560" height="315" src={music + "?autoplay=1"} frameborder="0" allow="accelerometer; autoplay={1}; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {redirect && <Redirect to={sceneList[nextScene].path} />}
    </div>
  );
}

/* 
 *    <Card primary>
      <Image src='https://64.media.tumblr.com/21697b9bdde288c814fd0aab7211bd03/9d79f4b579da3f7a-10/s1280x1920/63ae306f7ede934935bc7447b6e818c3670617f5.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>The Skeleton</Card.Header>
              <Divider/>
        <Card.Description>
        <p>Happy Halloween! Are you ready for spooks?</p>
        <p>You better be ready for a lot!</p>
        </Card.Description>
      </Card.Content>
    </Card> */

export default MonsterPanel;
