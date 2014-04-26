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
    2: "L218 <br/>⅛ CT Blue",
    4: "L203 <br/>¼ CT Blue",
    8: "L202 <br/>½ CT Blue",
    16: "L201 <br/>CT Blue",
    32: "L200 <br/>2× CT Blue",
    64: "L525 <br/>Ardent Blue",
    128: "L132 <br/>Medium Blue",
    256: "L722 <br/>Bray Blue",
    512: "L119 <br/>Dark Blue",
    1024: "L713 <br/>J Winter Blue",
    2048: "L071 <br/>Tokyo Blue",
    4096: "L <br/>Blue",
  };
  return this.value > 4069 ? this.value : names[this.value];
};
