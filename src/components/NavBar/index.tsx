import React from 'react'
import './index.css'
import basketIcong from './basketIcon.png'
import accountIcon from './accountIcon.png'
import logo from './logo.png'

export default function NavBar() {
  return (
        <>
    <div id='NavBar-Container'>
<div id='Navbar-Mobile'>
</div>

        <ul id='NavBar-LeftSection'>
            <img id="NavBar-Logo" src={logo} alt="Italian Trulli" />

            <li className='NavLink-Container'>
                <p className='NavLink-Text'>Menu</p>
                <div className="NavLink-Underline"></div>
            </li>
            
            <li className='NavLink-Container'>
                <p className='NavLink-Text'>Promos</p>
                <div className="NavLink-Underline"></div>
            </li>

            <li className='NavLink-Container'>
                <p className='NavLink-Text'>Quiz</p>
                <div className="NavLink-Underline"></div>
            </li>
            
        </ul>


    <ul id='NavBar-RightSection'>
            <li>Account</li>
            
                <li>
            <div id='basketContainer'>
                    <img id="basketIcon" src={basketIcong} alt="Italian Trulli" />
                    <div id='basketCounter'>1</div>
            </div>
                </li>
            
        </ul>







    </div>
    </>
  )
}

