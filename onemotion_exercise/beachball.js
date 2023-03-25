"use strict";
import { timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 0.5 }, { easing: "ease" }],

  [".ball", { rotate: 1000, scale: 0, x: 1300, y: -1000 }, { duration: 1 }, { easing: "ease" }],
];

timeline(sequence, { repeat: "Infinity" });
