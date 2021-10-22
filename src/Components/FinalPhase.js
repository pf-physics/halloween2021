import React, { useState, useEffect } from 'react';
import { Button, Image, Divider, Grid, Input } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import { sceneList } from "../index"
import host from '../resources/host.jpg'
import black from '../resources/black.jpg'
import FinalDialogue from './Scripts/FinalPhase.js'
import { itemList, minEvidence } from "../Components/Scripts";
import skeleton from '../resources/skeleton.jpg'
import partySong from '../resources/partytime.mp3'
import startSong from '../resources/finalPhase.mp3'


const wrongEvidence = (missing) => [
    {text: "Hmm... this isn't telling me anything. Are you just wasting our time?", img: skeleton},
    {text: missing, img: black}
    ]


const wildAccusation = (accused) => [
    {text: ("Of course! " + accused + " is the source of all our problems!"), img: skeleton},
    {text: "Then everything will be solved if I eat them?"},
    {text: "Exactly!", img: skeleton},
    {text: "Marvelous!"},
    {text: "CRONCH!"},
    {text: "nice going", dead: ("Well that solved nothing. " + accused + ", drink three times to revive yourself and try again.")}
    ]

const guestList = ["Simon", "Canada", "Zehra", "Emil", "Clara", "Henrike", "Sacha", "Svend", "Hanna", "Daniel", "Dani", "Karo", "Kula", "Kasper", "Louise", "Kristine", "Thanasis", "Angeliki"]

const realAnswer = "Morfran Grimshaw"

export const MonsterPanel = ({ color, sceneIndex,
    code,
    room,
    name,
    items,
    setDead,
    isEnd=false }) => {

    const [dialogue, setDialogue] = useState(FinalDialogue(code,room))

    const findNextScene = () => {
        if (sceneIndex) return sceneIndex

        return sceneList.indexOf(sceneList.filter(x => x.name === name).pop()) + 1
    }

    const [nextScene, setNextScene] = useState(findNextScene())
    const [input, setInput] = useState(dialogue[0].input)
    const [ans, setAns] = useState("")
    const [phase, setPhase] = useState(code)
    const [returnIndex, setReturnIndex] = useState(0)

    const [index, setIndex] = useState(0)
    const [redirect, setRedirect] = useState(false)


    const [song, setSong] = useState(startSong)
    if (dialogue[index].isEnd && song != partySong) {
        setSong(partySong)
    }

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

    if (dialogue[index].dead) {
        setDead(dialogue[index].dead)
    }

    const handleClick = () => {

        if (input && dialogue[index].culpritCheck) {
            if(guestList.map(v => v.toLowerCase()).includes(ans)){
                setDialogue(wildAccusation(ans.charAt(0).toUpperCase() + ans.slice(1)))
                setReturnIndex(index)
                setIndex(0)
                setInput(false)
                return
            }
        }

        if (input && ans.toLowerCase() !== dialogue[index].input.toLowerCase()) {
            setAns("")
            return
        }

        setAns("")

        if (index + 1 >= dialogue.length) {
            if (returnIndex > 0) {
                setDialogue(FinalDialogue(code,room))
                setIndex(returnIndex)
                setReturnIndex(0)
                return
            }
            setRedirect(true)
        } else {
            if (dialogue[index + 1].evidenceCheck) {
                var missing = Array.from(minEvidence).filter(v => !Array.from(items).includes(v))
                if (missing.length > 0) {
                    setReturnIndex(index)
                    setIndex(0)
                    setDialogue(wrongEvidence("You're missing something..." + missing[0].hint && missing[0].hint))
                    setInput(false)
                    return
                }
            }

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

    if (dialogue[index].isEnd) {
        document.body.classList.add("ending")
    }



    const img = dialogue[index].img || host

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
