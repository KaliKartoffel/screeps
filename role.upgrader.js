var roleUpgrader = {

    
    /** @param {Creep} creep **/
    run: function(creep) {
        var harvestE = require('harvestE');
        working = creep.memory.working;
        if(working && creep.carry.energy == 0) {
            creep.memory.working = false;
        } else if(!working && creep.carry.energy == creep.carryCapacity) {
            Memory.energySources[creep.memory.x] -= 1
            creep.memory.x = false;
            creep.memory.working = true;
        }
	    if(working === false) {
            harvestE.run(creep);
        }
        else { //working
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
	}
};

module.exports = roleUpgrader;