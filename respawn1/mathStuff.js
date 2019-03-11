var spawner = {
    workPartsPerRoom: function (roomName) {
        room = Game.rooms[roomName];
        sources = room.find(FIND_SOURCES); 
        return sources.length * SOURCE_ENERGY_CAPACITY / 300 / 2;
    }
}

module.exports = spawner;