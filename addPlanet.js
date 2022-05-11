
function addPlanet(count) {
  let dev = 21.79;
  dev = 2.012;
  let mean = 18.88;
  mean = 2.32;
  let obj = {
    //
    // Technical informartions
    //
    diameter: random(25, 50),
    angle: 0,
    spin: 0,
    vel: random(0.005, 0.001) / count,
    spin_vel: random(0.05, 0.01),
    tilt: random(random(-1, 1) * QUARTER_PI),
    distance: count * count * 70 + sd,
    ecliptic_tilt: (mean + random(-dev, dev)) * PI / 180,
    //
    // Graphical informations
    //
    polar_height: random(0, 200),
    sea_level: random(1),
    stretch: random(1, count),
    //
    // Color informations
    //
    ground: {
      red: random(255),
      green: random(255),
      blue: random(255)
    }, sea: {
      red: random(255),
      green: random(255),
      blue: random(255)
    },
    //
    // Ring information
    //
    isRing: round(random(1)) === 1,
    //isRing: true,
    ring: {
      diameter: null
    },
    ring_graphics: null,
    ring_texture: null,
    //
    // Moons informations
    //
    moon_count: floor(random(5)),
    //moon_count: 3,
    moons: [],
    moons_graphics: [],
    moons_textures: [],
    //
    // Moon naming data
    //
  }

  if (obj.stretch >= 2) {
    obj.sea_level = 0;
    obj.polar_height = 0;
  }

  if (obj.isRing) {
    obj.ring_graphics = createGraphics(400, 400);
    obj.ring_graphics.noStroke();

    obj.ring.diameter = random(obj.diameter * 2, obj.diameter * 4);
    obj.ring.weight = random(3 * rings.pixelSize, map(obj.ring.diameter, obj.diameter * 2, obj.diameter * 4, 3, 15) * rings.pixelSize);
  }

  if (obj.moon_count > 0) {
    for (moon_c = 0; moon_c < obj.moon_count; moon_c++) {
      obj.moons[moon_c] = addMoon(count, moon_c, obj);
      obj.moons_graphics[moon_c] = createGraphics(400, 200);
      obj.moons_graphics[moon_c].noStroke();
    }
  }

  planets.push(obj);
}