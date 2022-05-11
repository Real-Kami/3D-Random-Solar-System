/*
 * TODO : 
 * mult suns
 * different kind of suns
 * rules for planets like : no ice if close to sun or no water if far from sun :
 *      no ice if close to sun
 *      no sea if close to sun
 *      no sea if far from sun
 *      more ice if far from sun
 *      bigger if far from sun
 * 
 * DONE ! 
 * moons orbits
 * made in heaven
 * camera lock
 * ring clipping
 * move sun
 * moons
 * improved lighting
 * rings
 * stretch I guess
 * better perfs
 * axis tilt
 * planet spin
 * zoom
 * Sea
 * Orbit rings
 */

function draw() {
  if (!drawing.completed) { drawPlanetsTexture(); }

  if (!rings.completed) {

    for (spd = 0; spd < rings.speed; spd++) {

      for (count = 0; count < planets.length; count++) {
        drawRingsTexture(planets[count].ring_graphics, count);
      }

      rings.pos.x += rings.pixelSize;
      if (rings.pos.x >= rings.width) {
        rings.pos.x = 0;
        rings.pos.y += rings.pixelSize;
        if (rings.pos.y >= rings.height) {
          ringsComplete();
        }
      }

    }

  }

  if (!moons_data.completed) {
    drawMoonsTexture();
  }
 
  renderPipeline();

  view.zoom += view.zoom_vel;
  sun_pos.add(sun_vel);
}


function drawPlanetsTexture() {
  for (spd = 0; spd < drawing.speed; spd++) {
    for (count = 0; count < graphics_list.length; count++) {

      graphics_list[count].fill(getPlanetColor(count));

      graphics_list[count].square(drawing.pos.x, drawing.pos.y, drawing.size);
    }

    drawing.pos.x += drawing.size;
    if (drawing.pos.x >= drawing.width) {
      drawing.pos.x = 0;
      drawing.pos.y += drawing.size;
      if (drawing.pos.y >= drawing.height) {
        drawingComplete();
        drawing.pos.y = 0;
      }
    }
  }
}

function drawRingsTexture(graphics, count) {
  if (graphics) {
    graphics.fill(getRingCol(count));
    graphics.square(rings.pos.x, rings.pos.y, rings.pixelSize);
  }
}

function drawMoonsTexture() {
  for (spd = 0; spd < moons_data.speed; spd++) {
    for (count = 0; count < planets.length; count++) {
      for (moon_count = 0; moon_count < planets[count].moon_count; moon_count++) {
        let graphics = planets[count].moons_graphics[moon_count]
        graphics.fill( getMoonCol(count * moon_count) );
        graphics.square(moons_data.pos.x, moons_data.pos.y, moons_data.pixelSize);
        //graphics.background(random(255));

      }
    }

    moons_data.pos.x += moons_data.pixelSize;
    if (moons_data.pos.x >= moons_data.width) {
      moons_data.pos.x = 0;
      moons_data.pos.y += moons_data.pixelSize;
      if (moons_data.pos.y >= moons_data.height) {
        moonsComplete();
        moons_data.pos.y = 0;
      }
    }
  }
}

function renderPipeline() {
  background(0);
  //fill(255,0,0, 127);
  //clear();

  if (!view.lock) {
    view.x_dir = map(mouseY, 0, height, TWO_PI, 0);
    view.y_dir = map(mouseX, 0, width, TWO_PI, 0);
  }

  rotateX(view.x_dir);
  rotateY(view.y_dir);


  translate(sun_pos.x, 0, sun_pos.z);

  //texture(bckgrnd);
  //sphere(5000);


  drawPlanets();

  if (view.orbits) {
    drawOrbits();
  }

  drawRings();

  if (view.orbits) {
    drawOrbits();

    drawMoonsOrbits();
  }

  //drawNames(); 
}