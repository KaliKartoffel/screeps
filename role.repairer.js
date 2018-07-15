

var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var harvestE = require('harvestE');
        working = creep.memory.working;
        if(working && creep.carry.energy == 0) {
            Memory.energySources[creep.memory.x] -= 1
            creep.memory.x = false;
            creep.memory.working = false;
        } else if(!working && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
	    if(working === false) {
            harvestE.run(creep);
        }
        else {
            sites = creep.room.find(FIND_STRUCTURES, {filter: (n) => n.structureType == STRUCTURE_WALL || n.structureType == STRUCTURE_ROAD || n.structureType == STRUCTURE_RAMPART});
            for (let i in sites) {
                if (sites.length) {
                    if (sites[i].structureType == STRUCTURE_ROAD && sites[i].hits < 20000 && creep.memory.role == "roadRepairer") {
                        if(creep.repair(sites[i]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(sites[i]);
                        }
                    } else if (sites[i].structureType == STRUCTURE_RAMPART && sites[i].hits < 15000) {
                        if(creep.repair(sites[i]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(sites[i]);
                        }
                    } else if(sites[i].structureType == STRUCTURE_WALL && sites[i].hits < 15000) {
                        if(creep.repair(sites[i]) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(sites[i]);
                        }
                    }
                } else {
                    var roleUpgrader = require('role.upgrader');
                    roleUpgrader.run(creep)
                } 
            }
        }
	}
};

module.exports = roleRepairer;