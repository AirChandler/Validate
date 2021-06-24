import React, {useState, useEffect, useCallback} from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Image } from '@fower/react'
import { styled } from "@fower/styled";
import listDevices from "./jdList";
import {JdDevice} from "./jdDevice"
import {Home} from "../Home.js"

const Input = styled("input");
interface MyProps{ 
    remove?: () => void,
    test: (device: string, id: string, desc: string) => void
};
export default function jdSearch(props: MyProps){
    //Inefficient- recreates array all time- useMemo instead
    //of effect
    const {
        device,
        filter,
        setFilter,
        selectDevice,
        selected
    } = listDevices();

    //Takes current input in text field and stores in our filter
    const onSetFilter = useCallback((evt) => setFilter(evt.target.value), [setFilter]);

    //evt recognised as default element of box (div)
    //not respecting input type, so need to get type using
    //fower styled
    return( 
            <Box 
                p-0 
                borderBlack
                border-5
                bg="#243447"
                roundedXL
                color="white" 
                absolute
                mt="-11"
                mr="10"
                right="10" 
                maxW="300"
                maxH="600"
                overflowYScroll
            >
                <Input 
                    text2XL 
                    border-2 
                    roundedXL 
                    borderGray500
                    mt-10
                    ml-15
                    w="90%"
                    bg="black"
                    color="white"
                    outlineNone
                    value={filter}
                    onChange={onSetFilter}
                />
                <Box
                    grid 
                    gridTemplateColumns-1
                    gap-10
                    mt-10
                    p-10
                >
                    {device.map(device =>(
                        <JdDevice 
                            key={device.id} 
                            {...device}
                            onTest={props.test}
                            selected={selected.has(device.name)}
                            onSelected={selectDevice}
                        />
                    ))}
                </Box>
            </Box>
        )
}