import React, { Component, Fragment } from 'react'
import {  Route , withRouter } from 'react-router-dom'
import { R_HOME, R_Admin } from '../actions/constants';
import Home from './Home';
import AdminMain from '../admin/AdminMain';
class RHome extends Component {
  render() {
    const { pathname } = this.props.location
    const isP = !pathname.includes(R_Admin)
    return (
      <Fragment>
        
        { isP ? 
          <Route path={R_HOME} component={Home} />
        :
        <Route path={R_Admin} component={AdminMain} />
      }
      </Fragment>
      
    );
  }
}


export default withRouter(RHome);