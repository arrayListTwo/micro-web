import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from '../views/App/index'
import DVideo from '../views/video'
import DInformation from '../views/information'

class BasicMap extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/video" component={DVideo}></Route>
        <Route path="/information" component={DInformation}></Route>
      </Router>
    )
  }
}

export default BasicMap
