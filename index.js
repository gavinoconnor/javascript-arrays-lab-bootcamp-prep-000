var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = function(newCat) {
  kittens.push(newCat);
  return kittens;
}

var destructivelyPrependKitten = function(newCat) {
  kittens.unshift(newCat);
  return kittens
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
  return kittens;
}

var appendKitten = function() {

}

var prependKitten = function() {

}

var removeLastKitten = function() {

}

var removeFirstKitten = function() {

}
