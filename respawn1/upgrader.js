var roleUpgrader = {
    run: function(creep) {
        if(creep.memory.mining && creep.carry.energy == creep.carryCapacity) {
            creep.memory.mining = false;
        } else if(!creep.memory.mining && creep.carry.energy == 0) {
            creep.memory.mining = true;
        }
	    if(creep.memory.mining) {
            if (creep.harvest(Game.getObjectById(creep.memory.mySource)) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.getObjectById(creep.memory.mySource));
            }
        }
        else { 
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
	}
};

module.exports = roleUpgrader;