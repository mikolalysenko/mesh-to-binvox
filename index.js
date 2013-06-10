"use strict"

var voxelize = require("rle-rasterize")
var saveBinvox = require("rle-save-binvox")

var BINVOX_ORDER = [2, 0, 1]

function meshToBinvox(cells, positions, resolution) {
  var lo = [Infinity, Infinity, Infinity],
      hi = [-Infinity, -Infinity, -Infinity],
      n  = positions.length, i, j, p, q
  for(i=0; i<n; ++i) {
    p = positions[i]
    for(j=0; j<3; ++j) {
      lo[j] = Math.min(lo[j], p[j])
      hi[j] = Math.max(hi[j], p[j])
    }
  }
  var scale = +resolution || 1.0
  var iscale = 1.0 / scale
  var shift = [0,0,0]
  for(j=0; j<3; ++j) {
    shift[j] = lo[j] - scale
  }
  var npositions = new Array(n)
  for(i=0; i<n; ++i) {
    p = positions[i]
    q = positions[i].slice(0)
    for(j=0; j<3; ++j) {
      q[BINVOX_ORDER[j]] = (p[j] - shift[j]) * iscale
    }
    npositions[i] = q
  }
  var volume = voxelize(cells, npositions)
  q = new Array(3)
  for(j=0; j<3; ++j) {
    q[BINVOX_ORDER[j]] = shift[j]
  }
  return saveBinvox(volume, undefined, q, scale)
}

module.exports = meshToBinvox