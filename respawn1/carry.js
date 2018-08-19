var carry = {
    run: function(creep) {
        if (creep.memory.dispencing && creep.carry.energy == 0) {
            creep.memory.dispencing = false;
        } else if (!creep.memory.dispencing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.dispencing = true;
        }

        if(!creep.memory.dispencing) {
            if (creep.memory.pos == Memory.sources[creep.memory.mySource]["dispencingPos"]) {
                
            } else {
                if (creep.moveByPath(Memory.sources[creep.memory.mySource]["pathToSource"]) == ERR_NOT_FOUND) {
                    creep.moveTo(new RoomPosition(Memory.sources[creep.memory.mySource]["start"]["x"], Memory.sources[creep.memory.mySource]["start"]["y"], Memory.sources[creep.memory.mySource]["start"]["roomName"]));
                }
            }
        } else {
            if(creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                if (creep.moveByPath(Memory.sources[creep.memory.mySource]["pathToCont"]) == ERR_NOT_FOUND) {
                   creep.moveTo(new RoomPosition(Memory.sources[creep.memory.mySource]["start"]["x"], Memory.sources[creep.memory.mySource]["start"]["y"], Memory.sources[creep.memory.mySource]["start"]["roomName"]));
                }
            }
        }
    }
}

module.exports = carry;