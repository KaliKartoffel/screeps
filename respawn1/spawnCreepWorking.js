var spawnCreepWorking = {
    run: function(spawn, workStats, name, memory) { //memory = json object
        Game.spawns[spawn].spawnCreep(workStats, name)
        for (let key in memory) {
            Game.creeps[name].key = memory[key];
        }
	}
};

module.exports = spawnCreepWorking;