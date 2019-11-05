import { CHANGE_THEME, EARTH_THEME , MOON_THEME , URAN_THEME} from './constants'

export const onChangeTheme = (type) => async dispatch => {
  
    const colors = [{
      type : EARTH_THEME,
      p_color : 'bg-gray-900',
      s_color: 'bg-white',
      a_color : '#fff',
      t_color : 'text-black',
      tl_color : 'text-gray-700',
      st_color: 'text-indigo-500',
      st_color_b: 'border-indigo-500',
      r_color : 'text-black',
      h_color : 'text-white',
      ct_color : 'text-black'
    },
    {
      type : MOON_THEME,
      p_color : 'moon-primary',
      s_color: 'moon-secondary',
      a_color : '#fff',
      t_color : 'text-white',
      tl_color : 'text-gray-200',
      st_color: 'text-indigo-400',
      st_color_b: 'border-indigo-400',
      r_color : 'text-white',
      h_color : 'text-white',
      ct_color : 'text-white'
    },
    {
      type : URAN_THEME,
      p_color : 'bg-white',
      s_color: 'bg-indigo-500',
      a_color : '#fff',
      t_color : 'text-white',
      tl_color : 'text-white',
      st_color: 'text-white',
      st_color_b: 'border-white',
      r_color : 'text-white',
      h_color : 'text-black',
      ct_color : 'text-black'
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


    
