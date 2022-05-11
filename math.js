function biasFunction(x) {
  let b = 0.5;
  let k = Math.pow(1 - b, 3);
  return (x * k) / (x * k - x + 1);
}

/*function myGaussian(x) {
  let s = 0.15;
  let m = -0.5;
  let g = exp( - pow(x + m, 2) / ( 2 * pow(s, 2)) );
  return -g +1;
}*/