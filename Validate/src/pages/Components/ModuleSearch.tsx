import React, {useState, useEffect, useCallback} from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Box, Image } from '@fower/react'
import { styled } from "@fower/styled";
import useDevices from "./jdDevices";

const Input = styled("input");

export default function ModuleSearch(){
    //Inefficient- recreates array all time- useMemo instead
    //of effect
    const {
        device,
        filter,
        setFilter
    } = useDevices();

    const onSetFilter = useCallback((evt) => setFilter(evt.target.value), [setFilter]);

    //evt recognised as default element of box (div)
    //not respecting input type, so need to get type using
    //fower styled
    return( <Box className="hello" p-100 maxW-1200 m="auto" color="white">
            <Input p-0 text2XL border-2 roundedXL borderGray500 w="100%"
            bg="black"
            color="white"
            outlineNone
            value={filter}
            onChange={onSetFilter}
            />
            <Box
            grid 
            gridTemplateColumns-2
            gap-10
            mt-10
            p-10
            m="auto"
            >
                {device.map(device =>(
                    <Box key={device.id} 
                    text3XL 
                    p-10 
                    border-1 
                    borderGray500 
                    roundedXL 
                    grid 
                    gridTemplateColumns-2
                    gap-10>
                        <Image 
                        src={`/devices/${device.id.toLowerCase().replace("microsoft-research-", "")}.jpg`} 
                        w="100%" 
                        />
                        <Box textXL>  
                        {device.name}
                        <br/>
                        {device.description}
                        </Box>
                    </Box>
                )
                )}
            </Box>
        </Box>)
}