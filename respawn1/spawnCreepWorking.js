var spawnCreepWorking = {
    run: function(spawn, workStats, name, memory) {
        try {
            console.log(memory)
            spawn.spawnCreep(workStats, name)
            Game.creeps[name].memory = memory; 
        } catch (error) {
            
        }
	}
};

module.exports = spawnCreepWorking;