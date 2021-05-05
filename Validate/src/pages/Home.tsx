import React from 'react';
import { render } from 'react-dom';
import * as Chart from 'chart.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './css/home.css';

export class Home extends React.Component {

    //Variables that render on change
    state = {

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
            <img id="msPic" src="css/Assets/ms.png" alt="Microsoft Logo"></img>
            <img id="titleHome" src="css/Assets/wrench.png" alt="Settings"></img>
            <img id="settings" src="css/Assets/menuList.png" alt="Menu"></img>
            <h1 id="titleText">{this.title}</h1>
            <img id="graph" src="css/Assets/Graph.PNG" alt="graph"></img>
            <img id="graph2" src="css/Assets/Graph2.PNG" alt="graph"></img>
          </div>
        </div>
      );
    }
  }