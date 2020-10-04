import React, { useState } from 'react';
import { Button, Image, Divider, Grid, Input } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import { sceneList } from "../index"

// TODO - back button
const MonsterPanel = ({ color, dialogue, sceneIndex, image, name, code }) => {

    const findNextScene = () => {
        if (sceneIndex) return sceneIndex

        return sceneList.indexOf(sceneList.filter(x => x.name === name).pop()) + 1
    }

    const [nextScene, setNextScene] = useState(findNextScene())
    const [input, setInput] = useState(dialogue[0].input)
    const [ans, setAns] = useState("")

    const [index, setIndex] = useState(0)
    const [redirect, setRedirect] = useState(false)

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

    return (<div style={{ margin: "10px" }} className="Center">
        <Grid className="dialogue" columns="2" style={{ backgroundColor: color }} stackable>
            <Grid.Column style={{ width:"300px", overflow: "hidden"}}>
                    <Image size="small" src='https://64.media.tumblr.com/21697b9bdde288c814fd0aab7211bd03/9d79f4b579da3f7a-10/s1280x1920/63ae306f7ede934935bc7447b6e818c3670617f5.jpg' wrapped ui={false} />
          </Grid.Column>
          <Grid.Column width="12" verticalAlign="middle" textAlign="left">
                <div style={{ color: "white", fontWeight: "bold", fontSize: "Large" }}>
                    <p>{dialogue[index].text}</p>
                </div>
                <Divider hidden />
            </Grid.Column>

            <Grid.Row textAlign="center" >
                <Grid.Column textAlign="center" width="100%">
                    <div width="100%" style={{ textAlign: "right", paddingRight: "20px", paddingLeft: "20px" }}>
                    {input && <Input className="answer" onChange={(e) => setAns(e.target.value)} style={{ width:"100%" }} placeholder={"Write answer"} />}
                    </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column></Grid.Column>
                <Grid.Column>
                    <div width="100%" style={{ textAlign: "right", marginTop: "-30px", paddingRight: "20px", paddingLeft: "20px" }}>
                        <Button style={{width:"100%", height:"50px"}} color="black" size="large" inverted onClick={handleClick}> Next </Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
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
