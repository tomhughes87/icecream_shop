import React from 'react'
import './index.css'
import iconicecream from './icecream-icon.png'

export default function Footer() {
  return (

    
    <div id="footerMainContainer">
    

    <img id='footerLogo' src={iconicecream} alt="A white icon of an icecream"/>
        
        <div id="footerSmallPrint">
          <ul>
            <li>© 2022 C&T UK, Inc.</li>
            <p>  |  </p>
            <li>All rights reserved.</li>
            <p>  |  </p>
            <li>Terms of Use</li>
            <p>  |  </p>
            <li>Cookie</li>
            <p>  |  </p>
            <li>Policy</li>
            <p>  |  </p>
            <li>Social Responsibility</li>
            <p>  |  </p>
            <li>Modern Slavery Act</li>
            <p>  |  </p>
            <li>Site Map</li>
          </ul>
        </div>

    </div>
  )
}
