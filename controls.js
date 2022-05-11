
function keyPressed() {
  let k = 0.05;
  switch (key) {
    case "a":
      view.zoom_vel = k;
      break;
    case "q":
      view.zoom_vel = -k;
      break;
    case " ":
      switch (view.isOn) {
        case true: view.isOn = false; break;
        case false: view.isOn = true; break;
      }
      break;
      case "&":
        switch (view.orbits) {
          case true: view.orbits = false; break;
          case false: view.orbits = true; break;
        }
        break;
    case "é":
      switch (view.lock) {
        case true: view.lock = false; break;
        case false: view.lock = true; break;
      }
      break;
    case "ArrowUp":
      sun_vel.z = 10;
      break;
    case "ArrowDown":
      sun_vel.z = -10;
      break;
    case "ArrowLeft":
      sun_vel.x = 10;
      break;
    case "ArrowRight":
      sun_vel.x = -10;
      break;
      case "z":
        view.speed += 0.5;
        break;
      case "s":
        view.speed += -0.5;
        break;
  }
}

function keyReleased() {
  view.zoom_vel = 0;
  sun_vel = createVector(0, 0, 0);
}

function theWorld() {
  return !view.isOn;
}