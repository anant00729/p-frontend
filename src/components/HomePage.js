import React, { Component } from 'react'
import earth from '../svg/009-earth.svg';
import fb from '../images/facebook.png';
import insta from '../images/instagram.png';
import tw from '../images/twitter.png';
import li from '../images/linkedin.png';
import testone from '../images/testTwo.png';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { onChangeTheme } from '../actions/themeActions';


 class HomePage extends Component {


   state = {
        //image : 'https://mir-cdn.behance.net/v1/assets//1f294367814fa2f58be274b1a3c40d6f/c4262aa6-d869-4235-b4b5-80e9330be718_rwc_0x0x1400x206x1400.jpg?h=31d9ea10600ab2f0f31add00298c1319'
      app_colors : this.props.theme.app_colors,
      image : testone
    }
  

    static getDerivedStateFromProps(nextProps, prevState){
      let { app_colors } = nextProps.theme
      if(app_colors !== prevState.app_colors){
        return { app_colors };
      }
      else return null;
   }
  

  render() {
    let { image , app_colors } = this.state
    const a = app_colors
    return (
      
      <div className="w-full relative pt-12">
        <div className="relative h-64 xl:h-48">
          <div className="h-64 xl:h-48 bg-cover bg-center" style={{backgroundImage: `url(${image})`}}></div>
          <div className="absolute top-0 w-full h-64 xl:h-48 app-overlay"></div>
        </div>
        
        <div className={`w-full -mt-32 xl:-mt-12 mx-auto flex h-full ${a.s_color}`}>
          <div className="hidden xl:w-1/3  xl:h-full xl:visible xl:flex xl:justify-center xl:flex-col xl:pl-10 xl:pr-4 card-width">

            <div className="xl:bg-white xl:shadow-md xl:rounded pb-8 z-10">
              {/* this is iamge */}
              <div className="w-24 h-24 self-center mt-8 mx-auto bg-white rounded-full border-1 border-white shadow-md">
                <img src={earth} className="w-full h-full m-auto h-full self-center"alt="asdasd"/>
              </div>
              
              {/* My Info */}
              <h3 className="text-xl text-center mt-2">Anant S Awasthy</h3>
              <div className="text-gray-700 text-center">
                  <p>Full Stack Developer</p>
                  <p>Binary Numbers, Freelance work</p>
                  <p>Mumbai, India</p>
              </div>

              <div className="flex px-8 mt-6 max-w-2xl m-auto justify-center mb-4" >
                <div className="w-6 h-6 mr-4">
                  <img src={fb} className="rounded-full shadow-sm"alt="asdasd"/>
                </div>
                <div className="w-6 h-6 mr-4">
                  <img src={tw} className="rounded-full shadow-sm"alt="asdasd"/>
                </div>
                <div className="w-6 h-6 mr-4">
                  <img src={li} className="rounded-full shadow-sm"alt="asdasd"/>
                </div>
              </div>

              <div className="w-full px-8">
                <div className="line-height bg-gray-300"></div>
              </div>

              <ul className="px-10">
                <li className="my-2">
                  <p className="text-md ">Android / IOS / React / Flutter</p> 
                  <div className="text-gray-700 text-sm">
                    Mobile Lead at Binary Numbers <br/>Mumbai, India  
                  </div>
                  
                </li>
                <li className="my-2">
                  <p className="text-md ">Android and Nodejs Developer</p> 
                  <div className="text-gray-700 text-sm">
                    Emefocus <br/>Bangalore, India  
                  </div>
                </li>
              </ul>


              

           
            </div>
            
            
          </div>
          <div className="w-full h-full flex-1 z-10 transparent">

            <div className="xl:hidden mx-auto">
                {/* this is iamge */}
                <div className="w-48 h-48 self-center mt-8 mx-auto bg-white rounded-full border-1 border-white shadow-md">
                    <img src={earth} className="w-full h-full m-auto h-full self-center"alt="asdasd"/>
                </div>
                
                {/* My Info */}
                <h3 className="text-2xl text-center mt-2">Anant S Awasthy</h3>
                <div className="text-gray-700 text-center">
                  <p>Full Stack Developer</p>
                  <p>Binary Numbers, Freelance work</p>
                  <p>Mumbai, India</p>
                </div>

                <div className="flex px-8 mt-6 max-w-2xl m-auto justify-center mb-4" >
                  <div className="w-8 h-8 mr-4">
                    <img src={fb} className="rounded-full shadow-sm"alt="asdasd"/>
                  </div>
                  <div className="w-8 h-8 mr-4">
                    <img src={tw} className="rounded-full shadow-sm"alt="asdasd"/>
                  </div>
                  <div className="w-8 h-8 mr-4">
                    <img src={li} className="rounded-full shadow-sm"alt="asdasd"/>
                  </div>
                </div>

                <div className="w-full px-8">
                  <div className="line-height bg-gray-300"></div>
                </div>

                <ul className="px-10">
                  <li className="my-2">
                    <p className="text-md ">Android / IOS / React / Flutter</p> 
                    <div className="text-gray-700 text-sm">
                      Mobile Lead at Binary Numbers <br/>Mumbai, India  
                    </div>
                    
                  </li>
                  <li className="my-2">
                    <p className="text-md ">Android and Nodejs Developer</p> 
                    <div className="text-gray-700 text-sm">
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
                <ul className="flex justify-center xl:justify-start ">
                   <li className="px-2 xl:px-4 my-2 py-2 border-b-4 border-indigo-500 rounded-b-sm rounded-t-sm text-indigo-500 cursor-pointer">Work</li>
                   <li className="px-2 xl:px-4 py-4 cursor-pointer">Moodboard</li>
                   <li className="px-2 xl:px-4 py-4 cursor-pointer">Android</li>
                   <li className="px-2 xl:px-4 py-4 cursor-pointer">Flutter</li>
                   <li className="px-2 xl:px-4 py-4 cursor-pointer">NodeJS</li>
                </ul>
             </div>
             <ul className="flex flex-wrap justify-center xl:justify-start">
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
                <li className="mt-2 p-2">
                   <div className="card-width-content rounded overflow-hidden shadow ">
                      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                         <div className="font-bold text-md mb-2">The Coldest Sunset</div>
                      </div>
                   </div>
                </li>
             </ul>



            </div>
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => ({
   theme : state.theme
 })
 
 HomePage.propTypes = {
   theme : PropTypes.object.isRequired
 }
 
 
 export default connect(mapStateToProps,{onChangeTheme})(HomePage)
 