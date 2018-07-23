var garbageCollector = {
    run: function(creep) {
        for(let i in Memory.creeps) {
            if(!Game.creeps[i]) {
                Memory.SpawnQue.push(Memory.creeps[i])
                delete Memory.creeps[i];
            }
        }
    }
};

module.exports = garbageCollector;