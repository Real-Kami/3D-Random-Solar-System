
function getPlanetColor(c) {
    let z = c * 34.577;
  
    let v = noise(drawing.pos.x / nf / planets[count].stretch, drawing.pos.y / nf, z);
  
    let seuil = drawing.width - drawing.size * 10;
    let k = map(drawing.pos.x ,seuil, drawing.width, 0, 1);
    if (drawing.pos.x > seuil) {
      v = lerp(
        v,
        noise(0, drawing.pos.y / nf, z),
        k
      )
    }
  
    let seuil2 = drawing.size * 15;
    let k2 = map(drawing.pos.y, 0, seuil2, 1, 0);
    if (drawing.pos.y < seuil2) {
      v = lerp(
        v,
        noise(0, 0, z),
        k2
      )
    }
  
    let seuil3 = drawing.height - drawing.size * 15;
    let k3 = map(drawing.pos.y, seuil3, drawing.height, 0, 1);
    if (drawing.pos.y > seuil3) {
      v = lerp(
        v,
        noise(drawing.width / nf / planets[count].stretch, drawing.height / nf, z),
        k3
      )
    }
  
    let r = v * planets[count].ground.red;
    let g = v * planets[count].ground.green;
    let b = v * planets[count].ground.blue;
    if (v < planets[count].sea_level) {
      r = v * planets[count].sea.red;
      g = v * planets[count].sea.green;
      b = v * planets[count].sea.blue;
    }
  
    if (c === 0) {
      r += 128;
      g += 64;
    } else {
      if (drawing.pos.y + v*100 < planets[c].polar_height || drawing.height - drawing.pos.y + v*100 < planets[c].polar_height) {
        return color(
          v * 255 + 64,
          v * 255 + 64,
          v * 255 + 64
        );
      }
    }
  
    let w = 0;
    return color(r + w, g + w, b + w);
  }
  
function getRingCol(count) {

    let y = count * 56.783;

    let d = dist(rings.pos.x, rings.pos.y, rings.width/2, rings.height/2);

    let n = noise(d / (nf / 3), y)*255;

    if ( d < 200 - planets[count].ring.weight) {
        n = 0;
    }

    let r = 255;
    let g = 255;
    let b = 255;
    let a = n - 0.3;

    return color(r, g, b, a);
  }
  
function getMoonCol(z) {  
  let nf2 = 1;
  let v = noise(moons_data.pos.x / nf2, moons_data.pos.y / nf2, z);


  let seuil = moons_data.width - moons_data.pixelSize * 5;
  let k = map(moons_data.pos.x, seuil, moons_data.width, 0, 1);
  if (moons_data.pos.x > seuil) {
    v = lerp(
      v,
      noise(0, moons_data.pos.y / nf2, z),
      k
    )
  }

  let seuil2 = moons_data.size * 15;
  let k2 = map(moons_data.pos.y, 0, seuil2, 1, 0);
  if (moons_data.pos.y < seuil2) {
    v = lerp(
      v,
      noise(0, 0, z),
      k2
    )
  }

  let seuil3 = moons_data.height - moons_data.size * 15;
  let k3 = map(moons_data.pos.y, seuil3, moons_data.height, 0, 1);
  if (moons_data.pos.y > seuil3) {
    v = lerp(
      v,
      noise(moons_data.width / nf2, moons_data.height / nf2, z),
      k3
    )
  }

  return v*255;
}