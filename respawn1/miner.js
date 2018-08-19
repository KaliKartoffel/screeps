var miner = {
    run: function(creep) {
        if(creep.harvest(Game.getObjectById(creep.memory.mySource)) == ERR_NOT_IN_RANGE) {
            if (creep.moveByPath(Memory.sources[creep.memory.mySource]["pathToSource"]) == ERR_NOT_FOUND) {
                creep.moveTo(Memory.sources[creep.memory.mySource]["start"]);
            }
        }
    }
}

module.exports = miner;