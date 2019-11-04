import { CHANGE_THEME, EARTH_THEME , MOON_THEME } from './constants'

export const onChangeTheme = (type) => async dispatch => {
  
    const colors = [{
      type : EARTH_THEME,
      p_color : 'bg-gray-900',
      s_color: 'bg-gray-800',
      a_color : '#fff',
      t_color : '#000',
      tl_color : '#4a5568',
      st_color: '#667eea',
      r_color : '#fff'
    },
    {
      type : MOON_THEME,
      p_color : 'moon-primary',
      s_color: 'moon-secondary',
      a_color : '#fff',
      t_color : '#000',
      tl_color : '#4a5568',
      st_color: '#667eea',
      r_color : '#fff'
    }
  ]

  const color = colors.find(_c => _c.type === type)

  console.log('color :', color);
    const action = {
        type : CHANGE_THEME,
        payload : color
    }
    dispatch(action)
    
}


    
