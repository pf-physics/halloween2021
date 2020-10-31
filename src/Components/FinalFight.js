import React, { useState } from 'react';
import { Button, Image, Divider, Grid, Input, Transition } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import { sceneList } from "../index"
import Ominous from '../resources/ScarySound.mp3'
import Rats from '../resources/rats.mp3'

const Fight = ({ color="black", sceneIndex, image="https://i.etsystatic.com/5573407/r/il/e4bbd8/2338843113/il_570xN.2338843113_n9iw.jpg", name }) => {

    const DarkPanel = () => {
        return ""
    }

    const findNextScene = () => {
        if (sceneIndex) return sceneIndex

        return sceneList.indexOf(sceneList.filter(x => x.name === name).pop()) + 1
    }

    const dialogue = [{text:"You've almost succeeded!", fade:true}, {text:"You are full of moon energy, now you need to complete the spell.", fade:true},
    {text:"",end:true}
    ]

    const darkImg = ""

    const panic = ""
    const dark = ["WE WARNED YOU", "YOU DID NOT LISTEN", "NOW IT IS TOO LATE", "WE ARE COMING", "."]

    const [nextScene, setNextScene] = useState(findNextScene())

    const [input, setInput] = useState(dialogue[0].input)
    const [ans, setAns] = useState("")

    const [index, setIndex] = useState(0)
    const [redirect, setRedirect] = useState(false)

    const [vis, setVis] = useState(true)
    const [pIn, setpIn] = useState(0)

    const [music, setMusic] = useState("")

    const [darkText, setDarkText] = useState("")

    const handleClick = () => {

        if (vis) {

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

            if (dialogue[index + 1].fade) {
                setVis(false)
            }

            }
        }
    }

    const DisplayDark = () => {
        const idx = dark.indexOf(darkText) || 0

        const nextWord = () => {
            setMusic(true)
            document.getElementsByClassName("Everything")[0].style.opacity=0;
            setDarkText(dark[idx+1])
            setIndex(dialogue.length-1)
            window.scrollTo(0,0)
       }

        if (!vis && idx < dark.length) {
            setTimeout(nextWord, 3000)
        }

        if (!vis && idx >= dark.length-1) {
            setVis(true)
        }
    }    

    DisplayDark()

//         <iframe style={{opacity:0}} width="560" height="315" src={"https://www.youtube.com/watch?v=l31Ir9WPhiI?autoplay=1"} frameborder="0" allow="accelerometer; autoplay={1}; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//        {!vis && music && <iframe style={{opacity:0}} width="560" height="315" src={"https://www.youtube.com/watch?v=TxMWTSVd64w?autoplay=1"} frameborder="0" allow="accelerometer; autoplay={1}; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
    return (<div style={{ margin: "10px" }} className="Center">
        {!vis && <div className="darkText" style={{color:"red", lineHeight:"100px", textAlign:"center", fontSize:"100px"}}>{darkText}</div>}
        <Transition visible={vis} animation='fade' duration={1500}>
        <Grid className="dialogue" columns="2" style={{ backgroundColor: color }} stackable>
            <Grid.Column style={{ width:"300px", overflow: "hidden"}}>
                <Image size="small" src={dialogue[index].end ? darkImg : image} wrapped ui={false} />
          </Grid.Column>
          <Grid.Column width="12" verticalAlign="middle" textAlign="left">
                <div style={{ color: "white", fontWeight: "bold", fontSize: "Large" }}>
                    <p>{dialogue[index].text}</p>
                </div>
                <Divider hidden />
            </Grid.Column>

            <Grid.Row textAlign="center" >
                <Grid.Column textAlign="center" width="100">
                    <div width="100%" style={{ textAlign: "right", paddingRight: "20px", paddingLeft: "20px" }}>
                    {input && <Input className="answer" onChange={(e) => setAns(e.target.value)} style={{ width:"100%" }} placeholder={"Write answer"} />}
                    </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column></Grid.Column>
                <Grid.Column>
                    <div width="100%" style={{ textAlign: "right", marginTop: "-80px", paddingRight: "20px", paddingLeft: "20px" }}>
                        <Button className="spookButton" style={{width:"100%", height:"50px"}} color="black" size="large" inverted onClick={handleClick}> Next </Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Transition>
        {redirect && <Redirect to={sceneList[nextScene].path} />}

        {music && <audio
            style={{opacity:0}}
            controls
            type="audio/mpeg"
            autoplay="true"
            src={Ominous}>
        </audio>}
        {(music || !vis) && <audio
            style={{opacity:0}}
            controls
            type="audio/mpeg"
            autoplay="true"
            src={Rats}>
        </audio>}

    </div>
  );
}

export default Fight;
