
let graphics_list = [];
let textures_list = [];

let drawing = {
  pos: null,
  size: 5,
  completed: false,
  width: 800,
  height: 400,
  speed: 100
}

let nf = 100;

let planets = []

let view = {
  zoom: 1,
  zoom_vel: 0,
  isOn: true,
  speed: 1,
  orbits:true,
  x_dir: null,
  y_dir: null,
  lock: false
}

let sd = 500;
let ambl = 255;

let planet_count;

let rings = {
    completed: false,
    pos:null,
    width: 400,
    height: 400,
    pixelSize: 5,
    speed: 50
}

let moons_data = {
  completed: false,
  pos:null,
  pixelSize: 5,
  width: 400,
  height: 200,
  speed: 20
}

let sun_pos;
let sun_vel;

let bckgrnd;

function preload() {
  //bckgrnd = loadImage("https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg");
}