//Load Stanford bunny
var bunny = require("bunny")

//Voxelize mesh and write to stdout
require("../index.js")(bunny.cells, bunny.positions, 0.1).pipe(process.stdout)
