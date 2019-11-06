import React, { Component } from 'react'
import me from '../app_img/1.png';
import fb from '../app_img/facebook.png';
import tw from '../app_img/twitter.png';
import li from '../app_img/linkedin.png';
import app_bg from '../app_img/app_bg.png';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { onChangeTheme } from '../actions/themeActions';
import { EARTH_THEME  } from '../actions/constants';
import dur from '../app_img/planet-earth-1.svg';
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'

 class HomePage extends Component {


   state = {
        //image : 'https://mir-cdn.behance.net/v1/assets//1f294367814fa2f58be274b1a3c40d6f/c4262aa6-d869-4235-b4b5-80e9330be718_rwc_0x0x1400x206x1400.jpg?h=31d9ea10600ab2f0f31add00298c1319'
      app_colors : this.props.theme.app_colors,
      image : app_bg
    }
  

    static getDerivedStateFromProps(nextProps, prevState){
      let { app_colors } = nextProps.theme
      if(app_colors !== prevState.app_colors){
        return { app_colors };
      }
      else return null;
   }
  

  render() {

    let { article } = this.props 
    let { image , app_colors } = this.state
    const a = app_colors

    let card_color = ''

    if(a.type === EARTH_THEME){
      card_color = a.s_color
    }else {
      card_color = a.p_color
    }



    // const all_art = article.all_articles.map((_a) => {

    //   return (<li className={`mt-2 p-2`}>
    //   <div className={`card-width-content rounded overflow-hidden shadow ${card_color}`}>
    //      <img className="w-full" src={_a.img} alt={_a.name}/>
    //      <div className="py-4 px-4">
    //         <div className={`text-md mb-2 ${a.ct_color}`}>{_a.name}</div>
    //         <div className={`text-sm mb-2 ${a.tl_color}`}>{_a.desc}</div>
    //      </div>
    //   </div>
    // </li>)
    // })


    const all_art_lg = article.all_articles.map((_a) => {

      return (<div className="max-w-lg w-full lg:max-w-full lg:flex px-4 lg:px-8 xl:px-0 py-4 lg:py-2">
      <div className="
            shadow-md card-img-height lg:h-auto card-img-width lg:max-w-xs flex-none bg-cover rounded text-center overflow-hidden" 
      style={{backgroundImage: `url(${_a.img})`}} 
      title={_a.name}>
        {/* <img className="w-full h-48 lg:h-auto" src={_a.img} alt={_a.name} /> */}
      </div>
      <div className={`lg:bg-transparent rounded-b lg:rounded-b-none lg:rounded-r py-4 lg:py-2 px-4 lg:px-4 flex flex-col justify-between leading-normal ${card_color} xl:mr-4`}>
        <div className="mb-4">
          <div className={`lg:${a.tl_color} ${a.ct_color} text-xl mb-2`}>{_a.name}</div>
          <p className={`lg:${a.tl_color} ${a.ct_color} text-sm`}
          style={{minHeight : '4rem'}}
          >{_a.desc}</p>
        </div>
        <div className="flex p-1">

          {_a.google ? <img 
          onClick={() => window.open(_a.google, '_blank')}
          className="w-6 h-6 mr-2 cursor-pointer" 
          src={"https://www.gstatic.com/android/market_images/web/favicon_v2.ico"} alt={_a.name} /> : null}
          {_a.apple ? <i 
          onClick={() => window.open(_a.apple, '_blank')}
          className={`fa fa-apple text-2xl lg:${a.tl_color} ${a.ct_color} cursor-pointer mr-3`}></i> : null}
          
          {_a.web ? <i 
          onClick={() => window.open(_a.web, '_blank')}
          className={`fa fa-globe text-2xl lg:${a.tl_color} ${a.ct_color} cursor-pointer`}></i> : null}
          
        </div>
        <div className="flex items-center mt-2">
          <img className="w-6 h-6 mr-2" src={dur} alt={_a.name} />
          <div className="text-sm">
            {/* <p className="text-gray-900 leading-none">{"App"}</p> */}
            <p className={`lg:${a.tl_color} ${a.ct_color}`}>{_a.dur}</p>
          </div>
        </div>
      </div>
    </div>)
    })

    
    

    console.log('article :', article.all_articles);
    

    return (
      
      <div className="w-full relative pt-12">
        <div className="relative h-32 xl:h-48">
          <div className="h-32 xl:h-48 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}></div>
          <div className="absolute top-0 w-full h-32 xl:h-48 app-overlay"></div>
        </div>
        
        <div className={`w-full -mt-24 xl:-mt-12 mx-auto flex h-full ${a.s_color}`}>
          <div className="hidden xl:w-1/3  xl:h-full xl:visible xl:flex xl:justify-center xl:flex-col xl:pl-10 xl:pr-4 card-width">

            <div className={`${card_color} xl:shadow-md xl:rounded pb-8 z-10`}>
              {/* this is iamge */}
              <div className="w-24 h-24 self-center mt-8 mx-auto">
                <img src={me} className="w-full h-full bg-white rounded-full border-1 border-white shadow-md p-1"alt="asdasd"/>
              </div>
              
              {/* My Info */}
              <h3 className={`text-xl text-center mt-2 ${a.ct_color}`}>Anant S Awasthy</h3>
              <div className={`text-center ${a.ct_color}`}>
                  <p>Full Stack Developer</p>
                  <p>Binary Numbers, Freelance work</p>
                  <p>Mumbai, India</p>
              </div>

              <div className="flex px-8 mt-6 max-w-2xl m-auto justify-center mb-4" >
                <div 
                onClick={() => window.open("https://www.linkedin.com/in/anant-awasthy-230119134/", '_blank')}
                className="w-6 h-6 mr-4 cursor-pointer">
                  <img src={li} className="rounded-full shadow-sm"alt="asdasd"/>
                </div>
                <div 
                onClick={() => window.open("https://github.com/anant00729", '_blank')}
                className="mr-4 cursor-pointer">
                    <i className={`fa fa-github git-icon ${a.ct_color}`}></i>
                </div>
                <div 
                onClick={() => window.open("https://www.facebook.com/anant.awasthy", '_blank')}
                className="w-6 h-6 mr-4 cursor-pointer">
                  <img src={fb} className="rounded-full shadow-sm"alt="asdasd"/>
                </div>
              </div>

              <div className="w-full px-8">
                <div className="line-height bg-gray-300"></div>
              </div>

              <ul className="px-10">
                <li className="my-2">
                  <p className={`text-md ${a.ct_color}`}>Android / IOS / React / Flutter</p> 
                  <div className={`text-sm ${a.ct_color}`}>
                    Mobile Lead at Binary Numbers <br/>Mumbai, India  
                  </div>
                  
                </li>
                <li className="my-2">
                  <p className={`text-md ${a.ct_color}`}>Android and Nodejs Developer</p> 
                  <div className={`text-sm ${a.ct_color}`}>
                    Emefocus <br/>Bangalore, India  
                  </div>
                </li>
              </ul>


              

           
            </div>
            
            
          </div>
          <div className="w-full h-full flex-1 z-10 transparent">

            <div className="xl:hidden mx-auto">
                {/* this is iamge */}
                <div className="w-32 h-32 self-center mt-8 mx-auto">
                  <img src={me} className="w-full h-full bg-white rounded-full border-1 border-white shadow-md p-1"alt="asdasd"/>
               </div>
                {/* <div className="w-32 h-32 self-center mt-8 mx-auto bg-white rounded-full border-1 border-white shadow-md">
                    <img src={me} className="w-full h-full m-auto h-full self-center"alt="asdasd"/>
                </div> */}
                
                {/* My Info */}
                <h3 className={`text-xl text-center mt-2 ${a.t_color}`}>Anant S Awasthy</h3>
                <div className={`text-center ${a.tl_color}`}>
                  <p>Full Stack Developer</p>
                  <p>Binary Numbers, Freelance work</p>
                  <p>Mumbai, India</p>
                </div>

                <div className="flex px-8 mt-6 max-w-2xl m-auto justify-center mb-4" >
                  <div 
                  onClick={() => window.open("https://www.linkedin.com/in/anant-awasthy-230119134/", '_blank')}
                  className="w-8 h-8 mr-4 cursor-pointer">
                    <img src={li} className="rounded-full shadow-sm"alt="asdasd"/>
                  </div>
                  <div 
                  onClick={() => window.open("https://github.com/anant00729", '_blank')}
                  className="mr-4 cursor-pointer">
                    <i className={`fa fa-github git-icon-lg ${a.ct_color}`}></i>
                  </div>
                  <div 
                  onClick={() => window.open("https://www.facebook.com/anant.awasthy", '_blank')}
                  className="w-8 h-8 mr-4 cursor-pointer">
                    <img src={fb} className="rounded-full shadow-sm"alt="asdasd"/>
                  </div>
                </div>

                <div className="w-full px-8">
                  <div className="line-height bg-gray-300"></div>
                </div>

                <ul className="px-10">
                  <li className="my-2">
                    <p className={`text-md ${a.t_color}`}>Android / IOS / React / Flutter</p> 
                    <div className={`text-sm ${a.tl_color}`}>
                      Mobile Lead at Binary Numbers <br/>Mumbai, India  
                    </div>
                    
                  </li>
                  <li className="my-2">
                    <p className={`text-md ${a.t_color}`}>Android and Nodejs Developer</p> 
                    <div className={`text-sm ${a.tl_color}`}>
                      Emefocus <br/>Bangalore, India  
                    </div>
                  </li>
                </ul>


                

                <div className="w-full px-8 ">
                  <div className="line-height-one bg-gray-300">
                  </div>
                </div>

              </div>

              <div className="xl:mx-0 mx-10 xl:mt-12 mt-0 xl:text-base text-xs sm:text-base transparent">
                <ul className="flex justify-start  xl:justify-start ">
                   <li className={`px-2 xl:px-4 my-2 py-2 border-b-4 ${a.st_color_b} rounded-b-sm rounded-t-sm ${a.st_color} cursor-pointer`}>Work</li>
                   {/* <li className={`px-2 xl:px-4 py-4 cursor-pointer ${a.r_color}`}>Moodboard</li>
                   <li className={`px-2 xl:px-4 py-4 cursor-pointer ${a.r_color}`}>Android</li>
                   <li className={`px-2 xl:px-4 py-4 cursor-pointer ${a.r_color}`}>Flutter</li>
                   <li className={`px-2 xl:px-4 py-4 cursor-pointer ${a.r_color}`}>NodeJS</li> */}
                </ul>
             </div>
             <ul className="flex flex-wrap justify-center xl:justify-start">
                
                {/* {all_art} */}
                {all_art_lg}
                
             </ul>



            </div>
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({
   theme : state.theme,
   article : state.article
 })
 
 HomePage.propTypes = {
   theme : PropTypes.object.isRequired,
   article : PropTypes.object.isRequired,
 }
 
 
 export default connect(mapStateToProps,{onChangeTheme})(HomePage)
 