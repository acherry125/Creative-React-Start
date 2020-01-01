import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/home/Home';
import Navigation from 'components/common/Navigation';
import CanvasController from 'components/canvasController/CanvasController';
import D3Controller from 'components/d3Controller/D3Controller';
import Tech from 'components/tech/Tech';

const ViewController = (props) => {

  const viewMap = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'Canvas',
      link: '/canvas'
    },
    {
      name: 'D3',
      link: '/d3'
    },
    {
      name: 'Tech demo',
      link: '/tech'
    }
  ];

  return ( 
    <div>
      <Router>
        <Navigation
          views={viewMap}
        />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/canvas">
            <CanvasController />
          </Route>
          <Route path="/d3">
            <D3Controller />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default ViewController;