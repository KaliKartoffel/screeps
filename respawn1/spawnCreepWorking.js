var spawnCreepWorking = {
    run: function(spawn, workStats, name, memory) { 
        Game.spawns[spawn].spawnCreep(workStats, name)
        for (let pair of memory) {
            key = pair[0]
            Game.creeps[name].memory[key] = pair[1];
        }
	}
};

module.exports = spawnCreepWorking;