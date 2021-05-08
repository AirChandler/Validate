import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/home.css';
import * as jacdac from 'jacdac-ts'
import {JDBus, JDDevice} from 'jacdac-ts';
export class Home extends React.Component {

    usb: JDBus = jacdac.createUSBBus();
    //Variables that render on change
    state = {
      device: this.usb.devices()[0],
    };

    title: string = "Validate";

    constructor(props: any) {
      super(props);
    }
  
    render () {
      return (
        <div>
          <div className="col-12 col-t12 col-l12 banner">
          </div>
          <div className="col-1 col-t1 col-l1">
            <img id="msPic" src="css/Assets/Microsoft.png" alt="Microsoft Logo"></img>
            <img id="titleHome" src="css/Assets/wrench.png" alt="Settings"></img>
            <img id="settings" src="css/Assets/menuList.png" alt="Menu"></img>
            <h1 id="titleText">{this.title}</h1>
          </div>
          <div id='search'>
          </div>
        </div>
      );
    }
  }