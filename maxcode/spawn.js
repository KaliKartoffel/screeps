var spawn = {
    run: function(spawn) { 
        var spawnCreepWorking = require('spawnCreepWorking');
        
        harvesterCount = 0;
        upgraderCount = 0;
        for (let name in Game.creeps) {
            if(Game.creeps[name].memory.role == "harvester") {
                harvesterCount++;
            } else {
                upgraderCount++;
            }
        }

        if (harvesterCount < 5) {
            spawnCreepWorking.run(spawn,[WORK,WORK,MOVE,CARRY], "Harvester" + Game.time, [["role", "harvester"], ["working", false], ["x", false]]);
        } else if (upgraderCount < 0) {
            spawnCreepWorking.run(spawn,[WORK,WORK,MOVE,CARRY], "Upgrader" + Game.time, [["role", "upgrader"], ["working", false], ["x", false]]);
             Memory.SpawnQue.shift();
        }
	}
};

module.exports = spawn;
