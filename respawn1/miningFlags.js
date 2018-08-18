var mineFlags = {
    run: function() { 
        for (let roomName of Memory.myRooms) {
            if (!Memory.createdMiningFlags.includes(roomName)) {
                //placeFlag
                console.log("creatingMiningFlag");
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
            adjacentPositions.push(new RoomPosition(position.x + i, position.y + 1, roomName));
        }
        for (let i = -1; i < 1; i++) {
            adjacentPositions.push(new RoomPosition(position.x + i, position.y - 1, roomName));
        }
        adjacentPositions.push(new RoomPosition(position.x + 1, position.y, roomName));
        adjacentPositions.push(new RoomPosition(position.x - 1, position.y, roomName));

        var adjacentTerrainPositions = [];
        for (let position of adjacentPositions) {
            var objectsOnPos = room.lookAt(position);
            for (let i in objectsOnPos) {
                if(objectsOnPos[i]["type"] == "terrain") {
                    adjacentTerrainPositions.push(position)
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
        Memory.createdMiningFlags.push(roomName);
    }
}

module.exports = mineFlags;