
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //pixelDensity(0.5);
  //noStroke();

  textSize(64);
  textFont('Times New Roman');

  planet_count = floor(random(1, 11));
  //planet_count = 2;

  for (count = 0; count < planet_count; count++) {
    graphics_list[count] = createGraphics(drawing.width, drawing.height);
    graphics_list[count].noStroke();
    graphics_list[count].background(255, 0, 255);
    addPlanet(count);
  }

  drawing.pos = createVector(0, 0, 0);
  rings.pos = createVector(0, 0, 0);
  moons_data.pos = createVector(0, 0, 0);
  sun_pos = createVector(0, 0, 0);
  sun_vel = createVector(0, 0, 0);

  planets[0].ground = {
    red: 255,
    green: 255,
    blue: 0
  }
  planets[0].diameter *= 4;
  planets[0].sea_level = 0;
  planets[0].stretch = 1;
  planets[0].vel = random(0.005, 0.001);
  planets[0].distance = 0;
  planets[0].moon_count = 0;

  //stroke(255, 255, 255);
}
