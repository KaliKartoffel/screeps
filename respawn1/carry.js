var harvesterClose = {
    run: function(creep) {
        //switching states
        if (!creep.memory.discpencing && creep.carry.energy === carry.carryCapacity) {
            creep.memory.discpencing = true;
        } else if (creep.memory.discpencing && creep.carry.energy === 0) {
            creep.memory.discpencing = false;
        }

        if (creep.memory.discpencing) {
            if (creep.transfer(Game.spawns["Spawn1"]) === ERR_OUT_OF_RANGE) {
                creep.moveTo(Game.spawns["Spawn1"]);
            }
        } else {
            if (creep.pos !== creep.memory.pos) {
                creep.moveTo(creep.memory.pos, reusePath = 15);
            } else {
                null
            }
        }
        
    }
};

module.exports = harvesterClose;