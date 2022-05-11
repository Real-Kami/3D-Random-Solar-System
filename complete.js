
function drawingComplete() {

    drawing.completed = true;
  
    for (count = 0; count < graphics_list.length; count++) {
      graphics_list[count].filter(BLUR, 5);
      textures_list[count] = graphics_list[count].get();
    }
  
}

function ringsComplete() {

  rings.completed = true;

  for (count = 0; count < planets.length; count++ ) {
    if (planets[count].isRing === true) {
      planets[count].ring_graphics.filter(BLUR, 5);
      planets[count].ring_texture = planets[count].ring_graphics.get();
    }
  }
}

function moonsComplete() {
  for(count = 0; count < planets.length; count++) {
    for(moon_count = 0; moon_count < planets[count].moon_count; moon_count++) {
      planets[count].moons_graphics[moon_count].filter(BLUR, random(2,5));
      planets[count].moons_textures[moon_count] = planets[count].moons_graphics[moon_count].get();
      moons_data.completed = true;
    }
  }
}