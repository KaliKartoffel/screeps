var longDistantMiner = {
    mine: function(creep, destRoom, homeRoom) { 
        if(!creep.memory.homeRoom) {
            creep.memory.homeRoom = creep.room;
        }
        var working = creep.memory.working;
        if (!working && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
            creep.memory.x = false;
        } else if (working && creep.carry.energy == 0) {
            creep.memory.working = false;
        }

        //main miner part in room
        if (!working) {
            if (creep.room.name != creep.memory.homeRoom.name) {
                var sources = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources);
                }
            } else {
                const exitDir = Game.map.findExit(creep.room, destRoom);
                const exit = creep.pos.findClosestByRange(exitDir);
                creep.moveTo(exit);
            }
        } else {
            if (creep.room.name == creep.memory.homeRoom.name) {
                const site = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
                if (site) {
                    if(creep.build(site) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(site);
                    }
                } else {
                }
                /*posError = creep.transfer(target);
                if (posError === 0) {

                } else {
                    if (posError == ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    } else if (posError == ERR_FULL) {
                        sources = creep.room.find(FIND_SOURCES_ACTIVE).sources.findClosestByRange;
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
                } */
                
            } else {
                const exitDir = Game.map.findExit(creep.room, homeRoom);
                const exit = creep.pos.findClosestByRange(exitDir);
                creep.moveTo(exit);
            }
        }
	}
};

module.exports = longDistantMiner;