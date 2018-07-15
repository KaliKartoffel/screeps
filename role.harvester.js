var roleHarvester = {

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
	    if(!working) {
            //harvestE.run(creep, 1);
            source = creep.pos.findClosestByRange(FIND_SOURCES)
            if(creep.harvest(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                targets = _.sortBy(targets, s => creep.pos.getRangeTo(s))
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                
            }
        }
	}
};

module.exports = roleHarvester;