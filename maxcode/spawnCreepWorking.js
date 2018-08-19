var spawnCreepWorking = {
    run: function(spawn, workStats, name, memory) { //memory = [[key1, value1][key2, value2]]
        Game.spawns[spawn].spawnCreep(workStats, name)
        for (let pair of memory) {
            console.log(pair)
            key = pair[0]
            Game.creeps[name].memory[key] = pair[1];
            console.log(Game.creeps[name].memory.key)
        }
	}
};

module.exports = spawnCreepWorking;