function addMoon(count, moon_count, planet) {
    let obj = {
        diameter: random(5, 10),
        distance: moon_count * 30 + planet.diameter * 2,
        angle: 0,
        vel: random(0.005, 0.001) / (moon_count+1),
        spin: 0,
        spin_vel: random(0.05, 0.01) 
    }
    return obj;
}