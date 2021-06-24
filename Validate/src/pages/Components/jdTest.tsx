import React, {useState, useEffect, useCallback} from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Image, Text } from '@fower/react'
import { styled } from "@fower/styled";
import listDevices from "./jdList";
import {JdDevice} from "./jdDevice"
import {Home} from "../Home.js"

const Input = styled("input");
let tests: Array<string>;
tests = ["Global Test (ALL pass)",
        "JD Protocol test",
        "Bootloader (300ms blue + 300ms green",
        "Idle (1000ms red)",
        "CRC verification",
        "Current Test <= (30ma)"]
let steps: Array<number>;
steps = [1, 3, 1, 1, 1, 1]
let complete: Array<number>;
complete = [0, 0, 0, 0, 0, 0];
let select = document.getElementById("firmware")

interface MyProps{ 
    name:string;
    id:string;
    desc:string;
};

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const JdTest = (props: MyProps)=>{
    const [ran, setRan] = useState(false); // boolean state
    const [flash, setFlash] = useState(false); // boolean state
    const [update, setUpdate] = useState(false);

    const runTests = async () => {
        setRan(ran => !ran); // update the state to force render
        await delay(2000)
        complete[4] = 1;
        complete[1] = 1;
        setUpdate(update => !update);
        await delay(10000);
        complete[2] = 1;
        complete[1] = 2;
        setUpdate(update => !update);
        await delay(10000);
        complete[3] = 1;
        complete[1] = 3;
        setUpdate(update => !update);
        await delay(2000);
        complete[5] = 1;
        complete[0] = 1;
        setUpdate(update => !update);
    }

    const runFlash = () => {
        setFlash(flash => !flash);
    }

    return( 
        <Box>
        <Box
            text4XL 
            fontBold
            border-2
            borderWhite
            white
            rounded2XL
            textAlign="center"
            mt="20"
            ml="12.5%" 
            w="75%"
            h="75%"
        >
            Testing {props.name}
        </Box>
        <Box
        grid 
        gridTemplateColumns-2
        gap-10
        absolute
        mt="20"
        ml="12.5%" 
        w="75%"
        h="75%"
        >
            <Box
                grid 
                gridTemplateColumns-2
                gap-10
                border-2
                borderWhite
                rounded2XL
            >
                <Image 
                    src={`/devices/${props.id.toLowerCase().replace("microsoft-research-", "")}.jpg`} 
                    w="100%"
                    rounded2XL 
                />
                <Box
                textLG 
                fontBold
                white
                rounded2XL
                textAlign="center"
                mt="25%"
                >
                    {props.desc}
                </Box>
            </Box>
            <Box
            grid 
            gridTemplateColumns-2>
                <Box
                    roundedFull
                    bg={ran ? "#243447" : "darkgreen"}
                    textAlign="center"
                    white
                    w="50%"
                    h="10%"
                    ml="25%"
                    mt="12%"
                    onClick={runTests}
                    >
                        <Text>
                            Run Tests
                        </Text>
                </Box>
                <Box
                grid-70-30
                gridTemplateRows-2
                gap-10
                border-2
                borderWhite
                rounded2XL
                >
                    <Box as="select" name="firmware"
                        id="firmware"
                        h="12%"
                        mt="12%"
                        bg="#243447"
                        white
                        ml="40%"
                    >
                        <option value="1">0.14.1</option>
                        <option value="2">0.14.0</option>
                        <option value="3">0.13.0</option>
                        <option value="4">0.12.0</option>
                    </Box>
                    <Box
                        as="a"
                        href="https://microsoft.github.io/jacdac-docs/tools/updater/"
                        target="_blank"
                        roundedFull
                        bg={flash ? "#243447" : "darkgreen"}
                        textAlign="center"
                        white
                        onClick={runFlash}
                    >
                        Flash
                    </Box>
                </Box>
            </Box>
            <Box
            text4XL 
            fontBold
            border-2
            borderWhite
            white
            rounded2XL
            textAlign="center"
            >
                Tests
                <Box
                >
                    {tests.map((test, index) =>(
                        <Box
                        text2XL
                        textAlign="left"
                        grid 
                        gridTemplateColumns-3
                        gap-10
                        p-50
                        >
                            <Box>
                            {test}
                            </Box>
                            <Box>
                                {complete[index]}/{steps[index]}
                            </Box>
                            {complete[index] == steps[index] ?
                            (
                            <Image 
                                src={`css/Assets/Tick.png`} 
                                w="25%"
                                rounded2XL 
                            />): 
                            <Image 
                            src={`css/Assets/cross.png`} 
                            w="25%"
                            rounded2XL 
                            />
                            }
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default JdTest;