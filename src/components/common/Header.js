import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import alien from '../../svg/001-alien.svg';
import earth from '../../svg/009-earth.svg';
import moon from '../../svg/moon.svg';
import { EARTH_THEME , MOON_THEME } from '../../actions/constants';

import { onChangeTheme } from '../../actions/themeActions';
import { R_HOME } from '../../actions/constants';

class Header extends Component {

  state = {
    app_colors : this.props.theme.app_colors
  }

  onThemeChange = (type) => {
    this.props.onChangeTheme(type)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    
    let { app_colors } = nextProps.theme
    if(app_colors !== prevState.app_colors){
      return { app_colors };
    }
    else return null;
  }

  render() {
    let { app_colors } =  this.state 
    const a = app_colors

    
    return ( 
      <div>
        <section className={`fixed h-12 xl:h-16 w-full top-0 flex shadow-md justify-between px-4 ${a.p_color} z-20`}>
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link to={R_HOME} className="text-center flex items-center">
                      <div className="w-12 h-12 rounded-full">
                        <img src={alien} className="rounded-full  w-10 h-10 m-auto h-full"alt="asdasd"/>
                      </div>
                      <p className="content-center text-white pl-2 text-2xl">∞</p>
                    </Link>
                </div>

                <div className="w-2/3 h-full flex content-center flex-wrap cursor-pointer justify-end ">
                  
                  <div 
                  onClick={() => this.onThemeChange(EARTH_THEME)}
                  className=" flex items-center px-2">
                    <img src={earth} className="xl:w-8 xl:h-8 w-6 h-6 self-center mx-auto bg-white rounded-full border-1 border-white self-center"alt="asdasd"/>
                    <p className="text-white ml-2 text-sm xl:text-base">Earth</p>  
                  </div>


                  <div 
                  onClick={() => this.onThemeChange(MOON_THEME)}
                  className=" flex items-center px-2">
                    <img src={moon} className="xl:w-8 xl:h-8 w-6 h-6 self-center mx-auto bg-white rounded-full border-1 border-white self-center"alt="asdasd"/>
                    <p className="text-white ml-2 text-sm xl:text-base">Moon</p>  
                  </div>

                </div>

            </section>
  
        </div>
      )
  }
}


const mapStateToProps = state => ({
  theme : state.theme
})

Header.propTypes = {
  theme : PropTypes.object.isRequired
}


export default connect(mapStateToProps,{onChangeTheme})(Header)
