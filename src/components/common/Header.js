import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import alien from '../../svg/001-alien.svg';


export default class Header extends Component {
  render() {
    return ( 
      <div>
        <section className="fixed bg-gray-900 h-12 xl:h-16 w-full top-0 flex shadow-md justify-between px-4">
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link href="" className="text-center flex items-center">
                      <div className="w-12 h-12 rounded-full">
                        <img src={alien} className="rounded-full shadow-md w-10 h-10 m-auto h-full"alt="asdasd"/>
                      </div>
                      <p className="content-center text-white pl-2 text-2xl">∞</p>
                    </Link>
                </div>
            </section>
  
        </div>
      )
  }
}
