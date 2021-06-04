import React, {useState, useEffect, useCallback} from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, Image } from '@fower/react'
import { styled } from "@fower/styled";
import {addAtom} from "@fower/core"
import listDevices from "./jdList";
import {Device} from "./jdList"

interface selectDevice{
    selected:boolean;
    onSelected: (name: string) => void;
}

addAtom("grid-70-30", {
    gridTemplateColumns: "70% 30%",
})

export const JdDevice:React.FunctionComponent<Device & selectDevice> = ({
    id,
    name,
    description,
    selected,
    onSelected,
}) => (
    <Box 
        className={id}
        key={id} 
        text3XL 
        p-10 
        border-3 
        borderBlack
        roundedXL 
        grid 
        gridTemplateColumns-1
        gap-10
        onClick={() => onSelected(name)}
        bg={selected ? "#141d26" : "#243447"}
    >
        <Box 
            textLG 
            fontBold
            border-2
            borderWhite
            rounded2XL
            textAlign="center"
        >
            {name}
        </Box>
        <Box
           grid 
           gridTemplateColumns-2
           gap-10 
        > 
            <Image 
                src={`/devices/${id.toLowerCase().replace("microsoft-research-", "")}.jpg`} 
                w="100%"
                rounded2XL 
            />
            <Box 
                textSM
                textAlign="left"
            >
                {description}
                {selected ?
                <Box
                    roundedFull
                    mt-20
                    bg="darkgreen"
                    textAlign="center"
                    w="100"
                >
                    Test
                </Box>
                : null}
            </Box>
        </Box>
    </Box>
)