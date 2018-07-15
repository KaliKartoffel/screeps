var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer')

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var harvestE = require('harvestE');
        working = creep.memory.working;
        if(working && creep.carry.energy == 0) {
            Memory.energySources[creep.memory.x] -= 1
            creep.memory.x = false;
            creep.memory.working = false
        } else if(!working && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        if (working) {
            const site = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (site) {
                if(creep.build(site) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(site);
                }
            } else {
                roleRepairer.run(creep)
            }
            
        } else {
            harvestE.run(creep);
	    }
	}
};

module.exports = roleBuilder;