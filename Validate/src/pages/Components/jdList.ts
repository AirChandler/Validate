import React, {useState, useEffect, useMemo, useCallback} from 'react';
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

export default function listDevices(): {
    device: Device[];
    filter: string;
    setFilter: (filter: string | ((filter: string) => string)) => void;
    selected: Set<string>;
    selectDevice: (name:string) => void;
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

    const [selected, setSelected] = useState<Set<string>>(new Set());

    const selectDevice = useCallback((name:string) => {
        setSelected((currentSet) => {
            const newSet = new Set(currentSet);
            if (currentSet.has(name)){
                newSet.delete(name);
            } else {
                newSet.add(name);
            }
            return newSet;
        })
    }, []);

    return {
        device,
        filter,
        setFilter,
        selected,
        selectDevice,
    }
}