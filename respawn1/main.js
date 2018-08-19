var placeMiningFlags = require("miningFlags");
var miner = require("miner");
var roleCarry = require("carry");

module.exports.loop = function () {

    //memory cleaner
    //should be done by SpawnQue for performances sake
    for(let i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    placeMiningFlags.run(Game.spawns["Spawn1"].room.name);

    for (let i in Game.rooms) {
        room = Game.rooms[i];
        creeps = room.find(FIND_MY_CREEPS);
        for (let creep of creeps) {
            switch (creep.memory.role) {
                case "carry":
                    roleCarry.run(creep);
                    break;
                case "miner":
                    miner.run(creep);
                    break;
                default:
                    console.log("creep Without role");
                    break;
            }
        }
    }
} 