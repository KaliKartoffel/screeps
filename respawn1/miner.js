var miner = {
    run: function(creep) {
        if(creep.harvest(Game.getObjectById(creep.mySource)) == ERR_NOT_IN_RANGE) {
            if (creep.moveByPath(Memory.sources[creep.mySource][0]) == ERR_NOT_FOUND) {
                creep.moveTo(Memory.sources[creep.mySource][2]);
            }
        }
    }
}

module.exports = miner;