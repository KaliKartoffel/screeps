var mineFlags = {
    placeFlags: function() { 
        for (let roomName in Memomy.myRooms) {
            if (!Memory.createdMiningFlags.includes(roomName)) {
                //placeFlag
                placeFlag(roomName)
            } else {
                
            }
        }
	}
};

function placeFlag (roomName) {
    var room = Game.rooms[roomName];
    var sources = room.find(FIND_SOURCES);
    for (let i in sources) {
        var source = sources[i];
        var position = source.pos
        var adjacentPositions = [];
        for (let i = -1; i < 1; i++) {
            adjacentPositions.add(new RommPosition(position.x + i, position.y + 1, rommName));
        }
        for (let i = -1; i < 1; i++) {
            adjacentPositions.add(new RommPosition(position.x + i, position.y - 1, rommName));
        }
        adjacentPositions.add(new RommPosition(position.x + 1, position.y, rommName));
        adjacentPositions.add(new RommPosition(position.x - 1, position.y, rommName));

        var adjacentTerrainPositions = [];
        for (let position of adjacentPositions) {
            var objectsOnPos = room.lookAt(position);
            for (let i in objectsOnPos) {
                if(objectsOnPos[i] == "terrain") {
                    adjacentTerrainPositions.add(possition)
                    break;
                }
            }
        }
        var bestPos = {};
        var bestPosPathLength = 10000; //random big number
        for (let position of adjacentTerrainPositions) {
            var path = position.findPathTo(Game.spawns["Spawn1"]);
            var pathLength = Object.keys(path).length;
            if(pathLength < bestPosPathLength) {
                bestPos = position;
                bestPosPathLength = pathLength;
            }
        }
        room.createFlag(bestPos, roomName + "miningFlag" + i);
    }
}

module.exports = mineFlags;