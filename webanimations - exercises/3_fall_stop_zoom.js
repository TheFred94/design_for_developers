"use strict";

const ball = document.querySelector("#ball");

const properties = {
  duration: 1000,
  iteration: 1,
  direction: "alternate",
  easing: "ease-in-out",
  composite: "add",
};

// Create keyframes and properties for falling and zoom
const keyframes = [{ transfrom: "translateY(-20vw)" }, { transform: "translateY(65vw)" }];

// register click
ball.addEventListener("mousedown", ballClicked);

// start falling animation
const animation = ball.animate(keyframes, properties);

function ballClicked() {
  const zoom = [{ transform: "scale(1)" }, { transform: "scale(0)" }];
  console.log("Ball clicked!");
  // pause falling animation
  animation.pause();
  // start zoom-animation
  ball.animate(zoom, properties);
}
