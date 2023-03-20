"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(".ball", { x: 400, rotate: 200 }, { duration: 2 }).finished.then(() => {
  animate(".ball", { scale: 0 }, { duration: 1 });
});