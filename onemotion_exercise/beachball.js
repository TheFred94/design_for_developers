"use strict";
import { animate, timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 2 }],
  [".ball", { scale: 0 }, { duration: 1 }],
  [".ball", { scale: 1, x: 1300, y: -1000 }, { duration: 2 }],
];

timeline(sequence);
