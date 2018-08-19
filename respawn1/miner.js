var miner = {
    run: function(creep) {
        if (creep.memory.mining) {
            if(creep.harvest(Game.getObjectById(creep.memory.mySource)) == ERR_NOT_IN_RANGE) {
                if (creep.moveByPath(Memory.sources[creep.memory.mySource]["pathToSource"]) == ERR_NOT_FOUND) {
                    creep.moveTo(Memory.sources[creep.memory.mySource]["start"]);
                }
            }
        } else {
            creep.transfer(creep.pos.findInRange(FIND_MY_CREEPS,1 , {filter: (object) => object.memory.role == "carry"}), RESOURCE_ENERGY);
        }
        
    }
}

module.exports = miner;