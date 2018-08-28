var placeMiningFlags = require("miningFlags");
var miner = require("miner");
var roleCarry = require("carry");
var spawner = require("spawner");
var dispercer = require("dispercer");
var upgrader0 = require("upgrader0");
var upgrader1 = require("upgrader1");
var builder0 = require("builder0");
var builder1 = require("builder1");

module.exports.loop = function () {
    //memory cleaner
    //should be done by SpawnQue for performances sake
    for(let i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    spawner.run(Game.spawns["Spawn1"]);
    placeMiningFlags.run(Game.spawns["Spawn1"].room.name);

    for (let i in Game.rooms) {
        room = Game.rooms[i];
        creeps = room.find(FIND_MY_CREEPS);
        for (let creep of creeps) {
            if (creep.memory.role.substring(0,9) == "dispercer") {
                dispercer.run();
            } else {
                switch (creep.memory.role) {
                    case "carry":
                        roleCarry.run(creep);
                        break;
                    case "miner":
                        miner.run(creep);
                        break;
                    case "upgrader":
                        upgrader0.run(creep);
                        break;
                    case "builder":
                        builder0.run(creep);
                        break;
                    default:
                        console.log("creep Without role");
                        break;
                }
            }
            
        }
    }
} 
