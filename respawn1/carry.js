var carry = {
    run: function(creep) {
        if(!creep.memory.dispencing) {
            if (creep.memory.pos == Memory.sources[creep.memory.mySource]["dispencingPos"]) {
                
            } else {
                if (creep.moveByPath(Memory.sources[creep.memory.mySource]["pathToSource"]) == ERR_NOT_FOUND) {
                    creep.moveTo(Memory.sources[creep.memory.mySource]["start"]);
                }
            }
        } else {
            if(creep.transfer(Game.spawns["Spawn1"]) == ERR_NOT_IN_RANGE) {
                if (creep.moveByPath(Memory.sources[creep.memory.mySource]["pathToCont"]) == ERR_NOT_FOUND) {
                    console.log("carry not on path");
                }
            }
        }
    }
}

module.exports = carry;