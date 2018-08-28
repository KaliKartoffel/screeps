var repairer = {
    run: function(creep) {
        if(creep.memory.mining && creep.carry.energy === creep.carryCapacity) {
            creep.memory.mining = false;
        } else if(!creep.memory.mining && creep.carry.energy === 0) {
            creep.memory.mining = true;
        }
	    if(creep.memory.mining) {
            if (creep.harvest(Game.getObjectById(creep.memory.mySource)) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.getObjectById(creep.memory.mySource));
            }
        }
        else { 
            if(Game.getObjectById(creep.memory.repairId).hits == Game.getObjectById(creep.memory.repairId).hitsMax) {
                creep.memory.repairId = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: object => {object.hits === object.hitsMax;}});
                creep.moveTo(creep.room.controller);
            }
        }
	}
};

module.exports = repairer;