export function STLCube(x = 0, y = 0, z = 0, xsize = 25, ysize = 25, zsize = 25) {
  function n(number) {
    return Number(number).toFixed(1) * 25;
  }
  function nx(number) {
    return Number(number).toFixed(1) * xsize;
  }
  function ny(number) {
    return Number(number).toFixed(1) * ysize;
  }
  function nz(number) {
    return Number(number).toFixed(1) * zsize;
  }

  return `
solid BASICSTLCUBEX${x}Y${y}Z${z}
  facet normal  0.0   0.0  ${n(-1.0)}
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
    endloop
  endfacet
  facet normal  0.0   0.0  ${n(-1.0)}
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
    endloop
  endfacet
  facet normal  ${n(-1.0)} 0.0   0.0
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
    endloop
  endfacet
  facet normal  ${n(-1.0)} 0.0   0.0
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0  ${n(1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
    endloop
  endfacet
  facet normal  0.0  ${n(1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
  facet normal  ${n(1.0)}  0.0 0.0
    outer loop
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
  facet normal  ${n(1.0)}  0.0 0.0
    outer loop
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0  ${n(-1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0  ${n(-1.0)}  0.0
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 0.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0  0.0  ${n(1.0)}
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
  facet normal  0.0  0.0  ${n(1.0)}
    outer loop
      vertex    ${nx(x + 0.0)}   ${ny(y + 0.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 1.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
      vertex    ${nx(x + 0.0)}   ${ny(y + 1.0)}   ${nz(z + 1.0)}
    endloop
  endfacet
endsolid BASICSTLCUBEX${x}Y${y}Z${z}
`;
}
