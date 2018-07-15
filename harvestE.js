var harvestE = {
    run: function(creep, index = false) {
        if (creep.memory.role != 'harvester' && creep.memory.test) { //TO remove
            var ldm = require('longDistantMining')
            ldm.mine(creep, "E52N8", "E52N9")
        } else {    
            if (creep.memory.x === false) {
                    if (index === false) {
                    /*if (Memory.energySources[0] <= Memory.energySources[1]) {                            
                        creep.memory.x = 0;
                        Memory.energySources[0] += 1;
                    } else {
                        creep.memory.x = 1;
                        Memory.energySources[1] += 1;
                    }*/
                    creep.memory.x = 0;
                    Memory.energySources[index] += 0;
                } else {
                    creep.memory.x = index;
                    Memory.energySources[index] += 1;
                }
            } 
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources[creep.memory.x]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.x]);
            }
        } 
	}
};

module.exports = harvestE;