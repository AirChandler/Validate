import * as jacdac from 'jacdac-ts'
import { JDDevice } from 'jacdac-ts';
import {useState} from 'react'

export class SetupBus {

    bus: jacdac.JDBus;
    devices: jacdac.JDDevice[];

    constructor(){
        this.bus = jacdac.createUSBBus();
        this.devices = this.bus.devices();
    }

    setupComms(): void{
        if(!this.bus.connected){
            this.bus.connect();
        }
    }

    getDevices(): JDDevice[] {
        return this.bus.devices();
    }
}

