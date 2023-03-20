"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".ball", { rotate: 360 }, { duration: 1.5, repeat: Infinity, easing: "linear" });

animate(".ball", { y: -400 }, { duration: 1.5, delay: stagger(0.2), easing: "ease-out", direction: "alternate", repeat: "Infinity" });

// animate(".ball", { x: 400, rotate: 200 }, { duration: 2, delay: stagger(0.2) }).finished.then(() => {
// });
