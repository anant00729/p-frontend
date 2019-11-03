import React, { Component, Fragment } from 'react'
import {  Route  } from 'react-router-dom'
import { R_HOME } from '../actions/constants';
import Home from './Home';
export default class RHome extends Component {
  render() {
    return (
      <Fragment>
        <Route path={R_HOME} component={Home} />
      </Fragment>
    )
  }
}
