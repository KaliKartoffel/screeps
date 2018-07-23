var spawnCreepWorking = require('spawnCreepWorking')

var spawnCreeps = {
    run: function(creep) {
        if (Memory.SpawnQue.length) {
            creepMem = Memory.SpawnQue.length[0];
            spawnCreepWorking.run(creepMem[parts], creepMem[role] + Game.time, creepMem);
        }
    }
};

module.exports = spawnCreeps;