import React from "react";

interface propTypes {
  shown: boolean;
  close: any;
}

export default function NotificationBar({ shown, close }: propTypes) {
  return shown ? (
    <>
        <div id="NotificationBarContainer">
            <div id="NotificationBarText">
              <p>Refer a friend and get 25% off your next order!</p>
            </div>
            <div id="NotificationBarCloseBtn" onClick={close}>
              <p>x</p>
          </div>
        </div>
    </>
  ) : null;
}
