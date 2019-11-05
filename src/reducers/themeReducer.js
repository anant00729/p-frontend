// this is just one of the reducers

import { CHANGE_THEME, EARTH_THEME } from '../actions/constants' 
const initailState = {
  app_colors: {
    type : EARTH_THEME,
      p_color : 'bg-gray-900',
      s_color: 'bg-white',
      a_color : '#fff',
      t_color : 'text-black',
      tl_color : 'text-gray-700',
      st_color: 'text-indigo-500',
      st_color_b: 'border-indigo-500',
      r_color : 'text-black',
      h_color : 'text-white'
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
