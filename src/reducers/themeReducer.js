// this is just one of the reducers

import { CHANGE_THEME, EARTH_THEME } from '../actions/constants' 
const initailState = {
  app_colors: {
    type : EARTH_THEME,
      p_color : 'bg-gray-900',
      s_color: 'bg-gray-800',
      a_color : '#fff',
      t_color : '#000',
      tl_color : '#4a5568',
      st_color: '#667eea',
      r_color : '#fff'
  }
 }
// on calling this.props.getProfiles() this method get called for GET_PROFILES

 export default function(state = initailState , action){

  
    switch(action.type){
        case CHANGE_THEME:
        return {
            ...state,
            app_colors : action.payload,
        }
        default : 
            return state
    }
 }
