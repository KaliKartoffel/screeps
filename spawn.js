var spawn = {
    run: function(spawn) { 
        var spawnCreepWorking = require('spawnCreepWorking');
        
        harvesterCount = 0;
        builderCount = 0;
        repairerCount = 0;
        roadRepairerCount = 0;
        upgraderCount = 0;
        for (let name in Game.creeps) {
            if(Game.creeps[name].memory.role == "harvester") {
                harvesterCount++;
            } else if (Game.creeps[name].memory.role == "builder") {
                builderCount++;
            } else if (Game.creeps[name].memory.role == "repairer") {
                repairerCount++;
            } else if (Game.creeps[name].memory.role == "roadRepairer") {
                roadRepairerCount++;
            } else {
                upgraderCount++;
            }
        }

        if (harvesterCount < 5) {
            spawnCreepWorking.run(spawn,[WORK,WORK,WORK,MOVE,MOVE,CARRY], "Harvester" + Game.time, [["role", "harvester"], ["working", false], ["x", false]]);
        } else if (builderCount < 0) {
            spawnCreepWorking.run(spawn,[WORK,WORK,WORK,MOVE,MOVE,CARRY], "Builder" + Game.time, [["role", "builder"], ["working", false], ["x", false]]);
        } else if (roadRepairerCount < 0) {
            spawnCreepWorking.run(spawn,[WORK,WORK,WORK,MOVE,MOVE,CARRY], "RoadRepairer" + Game.time, [["role", "roadRepairer"], ["working", false], ["x", false]]);
        } else if (repairerCount < 0) {
            spawnCreepWorking.run(spawn,[WORK,WORK,WORK,MOVE,MOVE,CARRY], "Repairer" + Game.time, [["role", "repairer"], ["working", false], ["x", false]]);
        } else if (upgraderCount < 0) {
            spawnCreepWorking.run(spawn,[WORK,WORK,WORK,MOVE,MOVE,CARRY], "Upgrader" + Game.time, [["role", "upgrader"], ["working", false], ["x", false]]);
        } else if(Memory.SpawnQue[0][0] == "harvesterClose") {
            spawnCreepWorking.run(spawn,[WORK,WORK,WORK,WORK,MOVE,CARRY], "HarvesterClose_" + Memory.SpawnQue[0][1] + "_" + Game.time, [["role", "harvesterClose"], ["mining", false],["source", Memory.SpawnQue[0][1]], ["pos", Memory.SpawnQue[0][2]]]);
            Memory.SpawnQue.shift();
        } else {
            spawnCreepWorking.run(spawn,[WORK,WORK,MOVE,MOVE,MOVE,CARRY,CARRY], "Ldm" + Game.time, [["role", "ldm"], ["working", false], ["homeRoom", false], ["x", false]]);
        }
	}
};

module.exports = spawn;