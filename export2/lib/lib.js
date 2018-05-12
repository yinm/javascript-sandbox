"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = square;
exports.diag = diag;
var sqrt = exports.sqrt = Math.sqrt;

function square(x) {
  return x * x;
}

function diag(x, y) {
  return sqrt(square(x) + square(y));
}