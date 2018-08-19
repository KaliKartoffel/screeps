var placeMiningFlags = require("miningFlags");
var carry = require("miner");

module.exports.loop = function () {

    placeMiningFlags.run(Game.spawns["Spawn1"].room.name);

    for (let i in Game.rooms) {
        room = Game.rooms[i];
        creeps = room.find(FIND_MY_CREEPS);
        for (let creep of creeps) {
            switch (creep.memory.role) {
                case "carry":
                    carry.run;
                    break;
                case "miner":
                    //miner.run;
                    break;
                default:
                    console.log("creep Without role");
                    break;
            }
        }
    }
} 