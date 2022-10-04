import React from 'react'
import './index.css'
import basketIcong from './basketIcon.png'
import accountIcon from './accountIcon.png'

export default function NavBar() {
  return (
        <>
    <div id='NavBarContainer'>
        <ul id='left'>
            <li>
                <p>Menu</p>
                <div id="underline"></div>
            </li>
            
            <li>
                <p>Promos</p>
                <div id="underline"></div>
            </li>
            <li>Quiz</li>
        </ul>

    {/* <div id='right'>
        <p>user</p>
        <p>backet</p>
    </div> */}

    <ul id='right'>
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

