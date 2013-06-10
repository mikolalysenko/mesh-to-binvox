mesh-to-binvox
==============
Converts a mesh into a [binvox](http://www.cs.princeton.edu/~min/binvox) stream.

Example
=======

```javascript
//Load Stanford bunny
var bunny = require("bunny")

//Voxelize mesh and write to stdout
require("mesh-to-binvox")(bunny.cells, bunny.positions, 0.1).pipe(process.stdout)
```

## `require("mesh-to-binvox")(cells, positions, resolution)`
Converts a mesh to a binvox file and writes it to a stream.

* `cells` are the triangles of the mesh
* `positions` are the vertices of the mesh
* `resolution` is the resolution of the binvox file to emit

**Returns** A `through` stream representing a binvox file containing the mesh

# Credits
(c) 2013 Mikola Lysenko. MIT License