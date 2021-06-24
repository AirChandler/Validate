import React, { useCallback } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/home.css';
import {Box, Image, Text} from '@fower/react'
import { styled } from "@fower/styled";
import JdSearch from './Components/jdSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SetupBus} from './Components/jdComms'
import * as jacdac from 'jacdac-ts'
import { runInThisContext } from 'node:vm';
import JdTest from './Components/jdTest'

interface MyProps{ };
interface MyState{ 
  showMenu: boolean; 
  showConnector: boolean;
  showTest: boolean;
  testingDevice: string;
  deviceId: string;
  deviceDesc: string;
};
export class Home extends React.Component<MyProps, MyState> {

  title: string = "Validate";
  jdComms: SetupBus = new SetupBus();
  devices: jacdac.JDDevice[] = [];

    constructor(props: MyProps) {
      super(props);
      this.state = {
        showMenu: false,
        showConnector: false,
        showTest: false,
        testingDevice: "",
        deviceId: "",
        deviceDesc: ""
      }
      this.menuShowToggle = this.menuShowToggle.bind(this);
    }

    componentDidMount(){
      //Start up methods
    }

    menuShowToggle = () => {
      this.setState({showMenu: !this.state.showMenu})
    }

    testShowToggle = (device: string, id: string, desc: string) => {
      this.setState({showTest: !this.state.showTest})
      this.setState({testingDevice: device})
      this.setState({deviceId: id})
      this.setState({deviceDesc: desc})
    }

    setupComms = () => {
      this.jdComms.setupComms();
      this.setState({showConnector: !this.state.showConnector})
    }
  
    render () {
      return (
        <div>
          <Box  
            bg="#243447"
            m="auto"
            p-0
            maxW="100%"
            h="70"
            roundedFull
            white
            toEvenly
          >
            <Box as="img"
              id="connector"
              src="css/Assets/Connector.png"
              alt="connector"
              width="60"
              height="60"
              absolute
              top="15"
              left="30"
              onClick={this.setupComms}
              cursorPointer
            />
            <Box as="img"
              src="css/Assets/wrench.png" 
              alt="Validate"
              width="60"
              height="60"
              absolute
              mt="5"
              onClick={() => window.location.reload()}
            />

            <Box as="img"
              id="menuList"
              src="css/Assets/menuList.png" 
              alt="Settings"
              absolute
              top="15"
              right="30"
              width="60"
              height="60"
              onClick={this.menuShowToggle}
            />

          </Box>
          <Box>
          { this.state.showTest ? (
            <JdTest 
            name={this.state.testingDevice}
            id={this.state.deviceId}
            desc={this.state.deviceDesc}
            />
          ) : null}
          </Box>
          <Box>
            { this.state.showMenu ? (
              <div id='JdSearch'>
                <JdSearch test={this.testShowToggle}/>
              </div>
            ) : null}
          </Box>
        </div>
      );
    }
  }