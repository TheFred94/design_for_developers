"use strict";
import { animate, timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 1 }, { easing: "ease-in" }],
  [".ball", { rotate: 1000, scale: 0, x: 1300, y: -1000 }, { duration: 3 }, { easing: "ease-in" }],
];

timeline(sequence);
