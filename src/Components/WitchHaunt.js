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

    const dialogue = [{text:"Hey frenz"},{text:"Things are crazy"},{text:"But it's gonne be okay!"},{text:"Here's what you have to do: first you have to find a lamp.", fade:true}, {text:"", end:true}]

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
       }

        if (!vis && pIn >= panic.length && idx < dark.length) {
            setTimeout(nextWord, 5000)
        }

        if (!vis && idx >= dark.length-1) {
            setVis(true)
        }
    }    

    DisplayDark()

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
