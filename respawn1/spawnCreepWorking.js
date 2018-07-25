var spawnCreepWorking = {
    spawnQue: function(spawn, memory) { //memory = json object
        Game.spawns[spawn].spawnCreep(memory["parts"], memory["role"] + Game.time)
        for (let key in memory) {
            if (memory.hasOwnProperty(key)) {
                Game.creeps[name].key = memory[key];
            }
        }
    }, 
    newCreep: function(spawn, memory, workStats = memory["parts"], name = memory["role"] + Game.time) { //memory = json object
        Game.spawns[spawn].spawnCreep(memory["parts"], memory["role"] + Game.time)
        for (let key in memory) {
            if (memory.hasOwnProperty(key)) {
                Game.creeps[name].key = memory[key];
            }
        }
        Game.creeps[name].memory["parts"] = workStats;
	}
};

module.exports = spawnCreepWorking;