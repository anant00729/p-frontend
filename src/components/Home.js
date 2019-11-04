import React, { Component } from 'react'
import Header from './common/Header';



import { connect } from 'react-redux'
import PropTypes from 'prop-types'


import { Route , Switch } from 'react-router-dom'
import { onChangeTheme } from '../actions/themeActions';


import HomePage from './HomePage';
import Test from './Test';
import NotFound from './common/NotFound';
import {  R_ProjectDet, R_HOME } from '../actions/constants';




class Home extends Component {

  state = {
    isVisible : true,
    app_colors : this.props.theme.app_colors,
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let { app_colors } = nextProps.theme
    if(app_colors !== prevState.app_colors){
      return { app_colors };
    }
    else return null;
 }

  onError = () => {
    this.setState({isVisible:false})
  }

  render() {

    const { match } = this.props
    let {isVisible , app_colors } = this.state
    const a = app_colors

    console.log('theme :', a);

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
    
    return ( <div className={`w-full relative xl:h-screen ${a.s_color}`} >
              
              <Switch>
                  <Route path={ match.url } exact component={HomePage} />
                  <Route exact path={ '/test' } component={Test}/>
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


const mapStateToProps = state => ({
  theme : state.theme
})

Home.propTypes = {
  theme : PropTypes.object.isRequired
}


export default connect(mapStateToProps,{onChangeTheme})(Home)

