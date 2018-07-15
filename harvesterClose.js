var harvesterClose = {
    run: function(creep) {
        if (creep.memory.mining) {
            if (creep.pos !== creep.memory.pos) {
                creep.moveTo(creep.memory.pos);
            } else {
                if (creep.memory.source == undefined) {
                    creep.memory.source = creep.pos.findInRange(FIND_SOURCES, 1);
                } else {
                    creep.harvest(creep.memory.source);
                }
            }
        } else {
            target = creep.pos.findInRange(FIND_MY_STRUCTURES, 1);
            if(target) {
                creep.transfer(target);
            } else {
                targets = creep.pos.findInRange(FIND_MY_CREEPS, 1);
                for (let target in targets) {
                    if (creep.memory.role == "dispencer") {
                        creep.transfer(target);
                        break;
                    }
                }
            }
        }
        
    }
};

module.exports = harvesterClose;