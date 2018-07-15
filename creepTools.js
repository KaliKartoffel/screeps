var transfer = {
    run: function(creep, dest_id) { 
        if(creep.transfer(Game.getObjectById(dest_id)) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.getObjectById(dest_id));
        }
	}
};

var harvest = {
    harvestNearest: function(creep, source_active = true) { //only same room
        if (source_active) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        } else {
            var source = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        }
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    },

    harvestByIndex: function (creep, index = 0, sources_active = true) {
        if (sources_active) {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);   
        } else {
            var sources = creep.room.find(FIND_SOURCES);
        }
        if (creep.harvest(sources[index]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[index]);
        }

    },

    harvestMultiple: function(creep, harvest_ratio = 1) {
        if (Memory.myRooms[creep.room].sources == undefined) {
            Memory.myRooms[creep.room].sources == [];
        }
        if (creep.memory.x == undefined) {
            creep.memory.x = false;
        }
        Memory.myRooms[creep.room].sources = sources;
        if (creep.memory.x === false) {
            if (sources[0] < sources[1] * harvest_ratio) {
                creep.memory.x = 0;
                Memory.myRooms[creep.room].sources[0] += 1
            } else {
                creep.memory.x = 1;
                Memory.myRooms[creep.room].sources[1] += 1
            }
        }

        //harvest part
        harvest.harvestByIndex(creep, creep.memory.x);

    }
}

module.exports = transfer;