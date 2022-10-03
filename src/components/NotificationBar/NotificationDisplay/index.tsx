import React, { useRef, useState } from "react";
// import ReactDOM from 'react-dom'clear
import "./index.css";

export function closeNotificationBar() {
  console.log("clicked");
  const notifBar = document.getElementById('NotificationMainContainer')
  // const closeBtn = document.getElementById('NotificationBarCloseBtn')
  // notifBar?.classList.add('Disabled')
  notifBar?.remove()

  // try{
  //     notifBar?.remove()
  // }
  // catch(err){
  //     console.log(err)
  // }

  // ReactDOM.unmountComponentAtNode(closeNotificationBar);
  // ReactDOM.unmountComponentAtNode(notifBar);
  // closeBtn?.remove()

  return true;
}

export default function NotificationDisplay() {
  const [hide, setHide] = useState(true);
  // setState({ hide: true });
  return (
    <>
      {/* {!hide && */}
      <div id="NotificationMainContainer">
        <div id="NotificationBarContainer">
          <p id="NotificationBarText">
            Refer a friend and get 25% off your next order!
          </p>
        </div>
        <div id="NotificationBarCloseBtn" onClick={closeNotificationBar}>
          <p>x</p>
        </div>
      </div>
      {/* }  */}
    </>
  );
}
