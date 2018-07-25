var spawnCreepWorking = require('spawnCreepWorking')

var spawnCreeps = {
    run: function() {
        if (Memory.SpawnQue.length) {
            creepMem = Memory.SpawnQue.length[0];
            spawnCreepWorking.spawnQue("Spawn1", creepMem);
        } else { //spawnNewCreeps

        }


    }
};

module.exports = spawnCreeps;