var spawnCreepWoking = require("spawnCreepWorking");

var spawner = {
    run: function (spawn) {
        //TODO: SpawnQue, just for the start:
        if (Memory.stage === 0) {
            if (spawn.energy == 300) {
                var carryCount = 0;
                var upgraderCount = 0;
                var minerCount = 0;
                for (let i in Game.creeps) {
                    switch (Game.creeps[i].memory.role) {
                        case "carry":
                            carryCount++;
                            break;
                        case "miner":
                            minerCount++;
                            break;
                        case "upgrader":
                            upgraderCount++;
                            break;
                        default:
                            break;
                    }
                }
                if (minerCount < 1) {
                    spawnCreepWoking.run(spawn, [MOVE, WORK, WORK, CARRY], "test miner" + Game.time, { role: "miner", mySource: "59f1a18d82100e1594f3888c", mining: true });
                } else if (carryCount < 3) {
                    spawnCreepWoking.run(spawn, [MOVE, CARRY, CARRY, CARRY], "test carry" + Game.time, { role: "carry", mySource: "59f1a18d82100e1594f3888c", dispercing: false });
                } else if (upgraderCount < 1) {
                    spawnCreepWoking.run(spawn, [MOVE, CARRY, WORK, WORK], "test upgrader" + Game.time, { role: "upgrader", mySource: "59f1a18d82100e1594f3888b", mining: false });
                } else {
                    spawnCreepWoking.run(spawn, [MOVE, CARRY, WORK, WORK], "test builder" + Game.time, { role: "builder", mySource: "59f1a18d82100e1594f3888b", mining: false });
                }
            }
        } else if (Memory.stage === 1) {
            console.log("next stage not implemented yet");
        }
    }
}

module.exports = spawner;