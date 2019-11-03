import React, { Component } from 'react'
import Header from './common/Header';





import { Route , Switch } from 'react-router-dom'

import ProjectDet from './ProjectDet'
import HomePage from './HomePage';
import NotFound from './common/NotFound';
import {  R_ProjectDet, R_HOME } from '../actions/constants';




export default class Home extends Component {

  state = {
    isVisible : true
  }

  onError = () => {
    this.setState({isVisible:false})
  }

  render() {

    const { match } = this.props
    let isVisible = this.state


    

    switch(this.props.location.pathname){
      // case R_Search:
      // case R_Login:
      // case R_HomeMenuNew:
      // case R_Profile:
      // case R_CreatePost:
      //     isVisible = false
      //     break;
      case R_HOME:  
      case R_ProjectDet:   
          isVisible = true
          break
      default:
          isVisible = false
          break;
    }

    return ( <div className="w-full relative h-screen w-12 absolute">
              
              <Switch>
                <Route path={ match.url } exact component={HomePage} />
                <Route exact path={ R_ProjectDet } component={ProjectDet}/>
                <Route 
                render={(props) =>  <NotFound {...props} data='web' onError={this.onError}/>} />
              </Switch>

              {isVisible ?  <Header/> : null}
              {/* {isVisible ?  <BottomBar/> : null}
              {isVisible ?  <Footer/> : null} */}

          </div>
    )
  }
}
