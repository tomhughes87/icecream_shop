import React, { useRef, useState } from "react";
import "./index.css";

export function closeNotificationBar() {
  console.log("clicked");
  const notifBar = document.getElementById('NotificationMainContainer')
  notifBar?.remove()
}

export default function NotificationBar() {
  return (
    
    <>
        <div id="NotificationBarContainer">
          <p id="NotificationBarText">
            Refer a friend and get 25% off your next order!
          </p>
        </div>
        <div id="NotificationBarCloseBtn" onClick={closeNotificationBar}>
          <p>x</p>
        </div>
    </>
  );
}
