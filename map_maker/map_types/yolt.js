var util = require('../map_util');

var tiles = require('../tile_types');
var map_repr = require('../map_repr');
var DenseMap = map_repr.DenseMap;

exports.name = 'You Only Live Twice'
exports.generate = function() {
  var m = 25, n = 11;
  var map = new DenseMap(m, n, 0, exports.name);
  var allJs = util.range(0, n);

  //second to last column is all blank
  map.set(tiles.EMPTY, m-2, allJs);
  //last column is out1-4, in5, a-e, finish
  map.set(tiles.TELE_OUT_1, m-1, 0);
  map.set(tiles.TELE_OUT_2, m-1, 1);
  map.set(tiles.TELE_OUT_3, m-1, 2);
  map.set(tiles.TELE_OUT_4, m-1, 3);
  map.set(tiles.TELE_IN_5, m-1, 4);
  map.set(tiles.CHECKPOINT_1, m-1, 5);
  map.set(tiles.CHECKPOINT_2, m-1, 6);
  map.set(tiles.CHECKPOINT_3, m-1, 7);
  map.set(tiles.CHECKPOINT_4, m-1, 8);
  map.set(tiles.CHECKPOINT_5, m-1, 9);
  map.set(tiles.FINISH, m-1, 10);

  //place start and finish
  map.set(tiles.GREEN_START, 0, allJs);
  map.set(tiles.FINISH, m-3, allJs);

  var Is = util.range(1, m-3);
  map.placeRandomlyInArea(tiles.TELE_IN_1, Is, allJs);
  map.placeRandomlyInArea(tiles.TELE_IN_2, Is, allJs);
  map.placeRandomlyInArea(tiles.TELE_IN_3, Is, allJs);
  map.placeRandomlyInArea(tiles.TELE_IN_4, Is, allJs);
  map.placeRandomlyInArea(tiles.TELE_OUT_5, Is, allJs);
  map.placeRandomlyInArea(tiles.CHECKPOINT_1, Is, allJs);
  map.placeRandomlyInArea(tiles.CHECKPOINT_2, Is, allJs);
  map.placeRandomlyInArea(tiles.CHECKPOINT_3, Is, allJs);
  map.placeRandomlyInArea(tiles.CHECKPOINT_4, Is, allJs);
  map.placeRandomlyInArea(tiles.CHECKPOINT_5, Is, allJs);

  //Tune some parameters
  map.walls = 21;
  var numExtraRocks = 2+util.getRandomInt(17,23);
  map.placeRandomly(tiles.ROCK, numExtraRocks);

  return map;
}
