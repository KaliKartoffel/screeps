var roleHarvester = {
    harvest: function (creep) {
        if (creep.memory.mining == undefined) {
            creep.memory.mining = true;
        }
        if (creep.memory.mining && creep.carry.energy == creep.carryCapacity) {
            creep.memory.mining = false;
        }
        else if (!creep.memory.mining && creep.carry.energy == 0) {
            creep.memory.mining = true;
        }
        if (creep.memory.mining) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            var sources = creep.room.find(FIND_STRUCTURES, { filter: object => object.structureType == STRUCTURE_CONTAINER && object.store[RESOURCE_ENERGY] < 1900});
            if (sources[0]) {
                source = creep.pos.findClosestByRange(sources);
                if (creep.transfer(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            } else if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
}

module.exports = roleHarvester;