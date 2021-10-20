import React, { useState, useEffect } from 'react';
import { Button, Image, Divider, Grid, Input } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import { sceneList } from "../index"
import host from '../resources/host.jpg'
import black from '../resources/black.jpg'


export const SimpleDialogue = ({ color, dialogue, sceneIndex,
    image="",
    setShowTo,
    setDead,
    name}) => {

    const [input, setInput] = useState(dialogue[0].input)
    const [ans, setAns] = useState("")

    const [index, setIndex] = useState(0)

    const [img, setImg] = useState(host)

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
            setAns("")
            return
        }

        setAns("")

        if (index + 2 > dialogue.length) {
            setShowTo(false)
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
    if (dialogue[index].dead) {
        setDead(dialogue[index].dead)
    }


    dialogue[index].noImage && img !== black && setImg(black)
    dialogue[index].switchImage && img !== image && setImg(image)

    return (<Grid className="dialogue glow" columns="2" style={{ backgroundColor: color }} stackable>
            <Grid.Column style={{ width:"300px", overflow: "hidden"}}>
                    <Image size="small" src={img} wrapped ui={false} />
          </Grid.Column>
          <Grid.Column width="12" verticalAlign="middle" textAlign="left">
                <div className="dialogueText" style={{ color: "white" }}>
                    <p><u>{dialogue[index].title}</u></p>
                    <p>{isObject ? <Words/> : Words}</p>
                </div>
                <Divider hidden />
            </Grid.Column>

            <Grid.Row textAlign="center" >
                <Grid.Column textAlign="center" width="100%">
                    <div width="100%" style={{ textAlign: "right", paddingRight: "20px", paddingLeft: "20px" }}>
                    {input && <Input value={ans} className={color=="#000000" ? "white" : "answer"} onChange={(e) => setAns(e.target.value.toLowerCase())} style={{ width:"100%"}} placeholder={"Write answer"} />}
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
  );
}


const MonsterPanel = ({ color, dialogue, sceneIndex,
    image="",
    music="",
    code,
    room,
    name,
    isEnd=false }) => {

    const findNextScene = () => {
        if (sceneIndex) return sceneIndex

        return sceneList.indexOf(sceneList.filter(x => x.name === name).pop()) + 1
    }

    const getSong = () => {
        const idx = nextScene > 0 ? nextScene-1 : 0
        const scene = sceneList.find(v => v.name == name)
        return scene && scene.music

        return sceneList[idx].music
    }
    

    const [nextScene, setNextScene] = useState(findNextScene())
    const [input, setInput] = useState(dialogue[0].input)
    const [ans, setAns] = useState("")
    const [phase, setPhase] = useState(code)
    const song = getSong()

    const [index, setIndex] = useState(0)
    const [redirect, setRedirect] = useState(false)


 const [img, setImg] = useState(host)

 const [audio] = useState(new Audio(song));
    const [playing, setPlaying] = useState(true);

  useEffect(() => {
      //playing && audio.paused ? audio.play() : audio.pause();
    },
    [playing]
  );

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
            setAns("")
            return
        }

        setAns("")

        if (index == 0) {
            setRedirect(false)
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

    if (phase !== code) {
        // bro why
        setIndex(0)
        setPhase(code)
        return <></>
    }

    const Words = dialogue[index].text
    const isObject = dialogue[index].isObject

    if (isEnd) {
        document.body.classList.add("ending")
    }


    if (dialogue[index].image) {
        img !== dialogue[index].image && setImg(dialogue[index].image)
    } else {
        dialogue[index].noImage && img !== black && setImg(black)
        !dialogue[index].noImage && img !== host && img !== image && setImg(host)
        dialogue[index].switchImage && img !== image && setImg(image)
    }

    return (<div style={{ margin: "10px" }} className="Center">
        <Grid className="dialogue glow" columns="2" style={{ backgroundColor: color }} stackable>
            <Grid.Column style={{ width:"300px", overflow: "hidden"}}>
                    <Image size="small" src={img} wrapped ui={false} />
          </Grid.Column>
          <Grid.Column width="12" verticalAlign="middle" textAlign="left">
                <div className="dialogueText" style={{ color: "white", lineHeight: "35px" }}>
                    <center><u>{dialogue[index].title}</u></center>
                    {isObject ? <Words/> : Words}
                </div>
                <Divider hidden />
            </Grid.Column>

            <Grid.Row textAlign="center" >
                <Grid.Column textAlign="center">
                    <div width="100%" style={{ textAlign: "right", paddingRight: "20px", paddingLeft: "20px" }}>
                    {input && <Input value={ans} className={color=="#000000" ? "white" : "answer"} onChange={(e) => setAns(e.target.value.toLowerCase())} style={{ width:"100%"}} placeholder={"Write answer"} />}
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
        {redirect && <h2>Head to the next room. Don't forget to look for clues and to use health potions if you have them.</h2>}
        <audio
            style={{opacity:0}}
            controls
            type="audio/mpeg"
            autoplay="true"
            src={song}>
        </audio>
    </div>
  );
}

export default MonsterPanel;
