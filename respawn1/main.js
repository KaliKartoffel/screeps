var placeMiningFlags = require("miningFlags");

module.exports.loop = function () {
    placeMiningFlags.placeFlags(Game.spawns["Spawn1"].room.name);
} 