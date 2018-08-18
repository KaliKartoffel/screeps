var placeMiningFlags = require("miningFlags");

module.exports.loop = function () {
    placeMiningFlags.run(Game.spawns["Spawn1"].room.name);
} 