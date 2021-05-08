import React, {useState, useEffect, useMemo} from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Box } from '@fower/react'
import { styled } from "@fower/styled";

export interface Device {
    id: string;
    name: string;
    company: string;
    description: string;
    repo: string;
    services: number[];
    firmwares: number[];
}

export default function useDevices(): {
    device: Device[];
    filter: string;
    setFilter: (filter: string | ((filter: string) => string)) => void
}{
    const [filter, setFilter] = useState("");
    const [allDevices, setAllDevices] = useState<Device[]>([]);

    useEffect(() => {
        fetch("/devices.json")
            .then(resp => resp.json())
            .then((device: Device[]) => setAllDevices(device))
    }, []);

    //useMemo recomputes only on change
    const device = useMemo(() => {
        return allDevices.filter(({name}) =>
            name.toLowerCase().includes(filter.toLowerCase())
            );
    }, [filter, allDevices]);

    return {
        device,
        filter,
        setFilter
    }
}