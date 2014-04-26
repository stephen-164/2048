function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

Tile.prototype.getText = function () {
  var names = {
    2: "L218 ⅛ CT Blue",
    4: "L203 ¼ CT Blue",
    8: "L202 ½ CT Blue",
    16: "L201 CT Blue",
    32: "L200 2× CT Blue",
    64: "L525 Ardent Blue",
    128: "L132 Medium Blue",
    256: "L722 Bray Blue",
    512: "L119 Dark Blue",
    1024: "L713 J Winter Blue",
    2048: "L071 Tokyo Blue",
    4096: "L Blue",
  };
  return this.value > 4069 ? this.value : names[this.value];
};
