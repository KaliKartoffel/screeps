var spawnCreepWoking = require("spawnCreepWorking");

var spawner = {
    run: function (spawn) {
        //TODO: SpawnQue, just for the start:
        if (spawn.energy == 300) {
            var transportCount = 0
            var minerCount = 0;
            for (let i in Game.creeps) {
                switch (Game.creeps[i]) {
                    case "transport":
                        transportCount++;
                        break;
                    case "miner":
                        minerCount++;
                        break;
                    default:
                        break;
                }
            }
            if (minerCount < 1) {
                spawnCreepWoking.run(spawn, [MOVE,WORK,WORK,CARRY], "test miner" + Game.time, {role: "miner", mySource: "59f1a24382100e1594f39ac2", mining: false});
            } else if (transportCount < 1) {
                spawnCreepWoking.run(spawn, [MOVE,CARRY,CARRY,CARRY], "test transport" + Game.time, {role: "transport", mySource: "59f1a24382100e1594f39ac2", dispercing: false});
            } else {
                spawnCreepWoking.run(spawn, [MOVE,CARRY,WORK], "test upgrader" + Game.time, {role: "upgrader", mySource: "59f1a24382100e1594f39ac1", mining: false});
            }
        }
    }
}

module.exports = spawner;