import React, { useState } from 'react';
import { Button, Image, Divider, Grid, Input, Transition } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import { sceneList } from "../index"

const WitchHaunt = ({ color="purple", sceneIndex, image="https://i.etsystatic.com/5573407/r/il/e4bbd8/2338843113/il_570xN.2338843113_n9iw.jpg", name }) => {

    const DarkPanel = () => {
        return ""
    }

    const findNextScene = () => {
        if (sceneIndex) return sceneIndex

        return sceneList.indexOf(sceneList.filter(x => x.name === name).pop()) + 1
    }

    const dialogue = [{text:"Hello again dearies! Good job in finding the candles."},{text:"I was able to find the location of their lair! I've hidden it under my table!"},{text:"Once you're in the lair, you'll be able to get the moonstones back. But you have to be very careful!"}, {text:"Here's what you have to do: First you have to find some glow wands.", fade:true}, {text:"", end:true}]

    const darkImg = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Black_photo.jpg"

    const panic = "Wait Z What's happening? Z STOP Z HELP Z AAAAAAAAAAAAA Z AAAAAAAAAAAAAAAAAAA Z AAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAA"
    const dark = ["DO NOT INTERFERE IN OUR AFFAIRS", "IF YOU DO NOT LISTEN WE WILL FIND YOU", "WE WILL END YOU", " "]

    const [nextScene, setNextScene] = useState(findNextScene())

    console.log(nextScene)
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

    const DisplayPanic = () => {

        const nextWord = () => {
            setpIn(pIn+1)
       }

        if (!vis && pIn < panic.length) {
            setTimeout(nextWord, pIn === 0 ? 1000 : 50)
        }

        const lines = Array.from(panic).slice(0, pIn)

        const disp = (l,i) => {
            if (l==="Z")
                return <div index={i}/>
            else return l
        }

        return <div>
            {lines.map((line,i) => disp(line,i) )}
        </div>
    }

    const DisplayDark = () => {
        const idx = dark.indexOf(darkText) || 0

        const nextWord = () => {
            setDarkText(dark[idx+1])
            setIndex(dialogue.length-1)
            window.scrollTo(0,0)
            setMusic("https://www.youtube.com/watch?v=TxMWTSVd64w")
       }

        if (!vis && pIn >= panic.length && idx < dark.length) {
            setTimeout(nextWord, 2500)
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
        <Transition visible={vis} animation='fade' duration={10000}>
        <Grid className="dialogue" columns="2" style={{ backgroundColor: color }} stackable>
            <Grid.Column style={{ width:"300px", overflow: "hidden"}}>
                    <Image size="small" src={dialogue[index].end ? darkImg : image} wrapped ui={false} />
          </Grid.Column>
          <Grid.Column width="12" verticalAlign="middle" textAlign="left">
                <div style={{ color: "white", fontWeight: "bold", fontSize: "Large" }}>
                    <p>{dialogue[index].text}</p>
                    {!vis && <DisplayPanic/>}
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
                        <Button style={{width:"100%", height:"50px", paddingBottom:"30px"}} color="black" size="large" inverted onClick={handleClick}> Next </Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Transition>
        {redirect && <Redirect to={sceneList[nextScene].path} />}
    </div>
  );
}

export default WitchHaunt;
