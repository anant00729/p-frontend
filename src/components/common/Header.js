import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import earth from '../../app_img/009-earth.svg';
import moon from '../../app_img/moon.svg';
import uran from '../../app_img/uranus.svg';
import { EARTH_THEME , MOON_THEME, URAN_THEME } from '../../actions/constants';

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
                      <div className={`w-10 h-10 rounded-full text-3xl xl:text-4xl ${a.h_color} logo-font -mt-2 xl:-mt-4 xl:ml-4`}>
                        A
                      </div>
                      <p></p>
                    </Link>
                </div>

                <div className="w-2/3 h-full flex content-center flex-wrap justify-end ">
                  
                  <div 
                  onClick={() => this.onThemeChange(EARTH_THEME)}
                  className=" flex items-center px-2">
                    <img src={earth} className="xl:w-8 xl:h-8 w-6 h-6  self-center mx-auto  rounded-full self-center"alt="asdasd"/>
                    {/* <p className={`${a.h_color} ml-2 text-sm xl:text-base`}>Earth</p>   */}
                  </div>


                  <div 
                  onClick={() => this.onThemeChange(MOON_THEME)}
                  className=" flex items-center px-2">
                    <img src={moon} className="xl:w-8 xl:h-8 w-6 h-6 self-center mx-auto  rounded-full self-center"alt="asdasd"/>
                    {/* <p className={`${a.h_color} ml-2 text-sm xl:text-base`}>Moon</p>   */}
                  </div>


                  <div 
                  onClick={() => this.onThemeChange(URAN_THEME)}
                  className="flex items-center px-2">
                    <img src={uran} className="xl:w-8 xl:h-8 w-6 h-6 self-center mx-auto rounded-full self-center"alt="asdasd"/>
                    {/* <p className={`${a.h_color} ml-2 text-sm xl:text-base`}>Uranus</p>   */}
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
