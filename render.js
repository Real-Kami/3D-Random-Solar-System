
function drawRings() {
  rotateX(-HALF_PI);
  for (count = 1; count < planets.length; count++) {

    if (planets[count].isRing === true) {

      push()

      rotateX(planets[count].ecliptic_tilt);

      rotateZ(planets[count].angle);

      rotateX(planets[count].tilt);

      translate(planets[count].distance * view.zoom, 0, 0);

      if (rings.completed) {
        texture(planets[count].ring_texture);
      } else {
        texture(planets[count].ring_graphics);
      }

      circle(0, 0, planets[count].ring.diameter * view.zoom);

      pop();
    }

  }
  rotateX(HALF_PI);
}

function drawOrbits() {

  push();

  rotateX(HALF_PI)
  noFill();
  stroke(255, 50);
  strokeWeight(3);

  for (count = 1; count < planets.length; count++) {
    push();
    rotateX(planets[count].ecliptic_tilt)
    circle(0, 0, planets[count].distance * 2 * view.zoom);
    pop();
  }
  pop();
  noStroke();

}

function drawMoonsOrbits() {
  stroke(255, 50);
  strokeWeight(2);
  noFill();
  for (count = 0; count < planets.length; count++) {
    push();

    rotateX(-HALF_PI + planets[count].ecliptic_tilt);
    rotateZ(planets[count].angle);
    translate(planets[count].distance * view.zoom, 0, 0);

    for (moon_count = 0; moon_count < planets[count].moon_count; moon_count++) {
      circle(0, 0, planets[count].moons[moon_count].distance * view.zoom * 2);
    }
    pop();
  }
  noStroke();
}

function drawPlanets() {
  for (count = 0; count < graphics_list.length; count++) {
    push();

    rotateX(planets[count].ecliptic_tilt);

    rotateY(planets[count].angle);
    if (count !== 0) {


      translate(planets[count].distance * view.zoom, 0, 0);

      rotateX(planets[count].tilt);

      rotateY(planets[count].spin);

    }

    if (drawing.completed) {
      texture(textures_list[count]);
    } else {
      texture(graphics_list[count]);
    }
    sphere(planets[count].diameter * view.zoom);

    pop();

    if (count !== 0) {
      drawMoons(count);
    }

    if (!theWorld()) {
      planets[count].angle += planets[count].vel * view.speed;
      planets[count].spin += planets[count].spin_vel * view.speed;
    }

    if (count === 0) {
      ambientLight(ambl);

      //pointLight(255, 255, 255, sun_pos.x, sun_pos.y, 50);
    }

  }
}

function drawMoons(count) {
  push();

  rotateX(planets[count].ecliptic_tilt);
  rotateY(planets[count].angle);
  translate(planets[count].distance * view.zoom, 0, 0)
  for (moon_count = 0; moon_count < planets[count].moon_count; moon_count++) {

    push();

    rotateY(planets[count].moons[moon_count].angle);

    translate(planets[count].moons[moon_count].distance * view.zoom, 0, 0);

    rotateY(planets[count].moons[moon_count].spin);

    if (moons_data.completed) {
      texture(planets[count].moons_textures[moon_count]);
    } else {
      texture(planets[count].moons_graphics[moon_count]);
    }
    sphere(planets[count].moons[moon_count].diameter * view.zoom);

    pop();

    if (!theWorld()) {
      planets[count].moons[moon_count].angle += planets[count].moons[moon_count].vel * view.speed;
      planets[count].moons[moon_count].spin += planets[count].moons[moon_count].spin_vel;
    }
  }

  pop();
}