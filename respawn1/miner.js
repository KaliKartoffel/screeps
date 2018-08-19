var miner = {
    run: function(creep) {
        if (creep.memory.mining && creep.carry.energy == cappacity) {
            creep.memory.mining = false;
        } else if (!creep.memory.dispencing && creep.carry.energy == 0) {
            creep.memory.mining = true;
        }

        if (creep.memory.mining) {
            if(creep.harvest(Game.getObjectById(creep.memory.mySource)) == ERR_NOT_IN_RANGE) {
                if (creep.moveByPath(Memory.sources[creep.memory.mySource]["pathToSource"]) == ERR_NOT_FOUND) {
                    creep.moveTo(new RoomPosition(Memory.sources[creep.memory.mySource]["start"]["x"], Memory.sources[creep.memory.mySource]["start"]["y"], Memory.sources[creep.memory.mySource]["start"]["roomName"]));
                }
            }
        } else {
            creep.transfer(creep.pos.findInRange(FIND_MY_CREEPS,1 , {filter: (object) => object.memory.role == "carry"})[0], RESOURCE_ENERGY);
        }
        
    }
}

module.exports = miner;