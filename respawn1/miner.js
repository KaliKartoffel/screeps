var miner = {
    run: function(creep) {
        if(creep.harvest(Game.getObjectById(creep.mySource)) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.flags[creep.room + "miningFlag" + "0"]); //generalise
        }
    }
}

module.exports = miner;