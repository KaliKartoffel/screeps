var mineFlags = {
    run: function() { 
        for (let roomName of Memory.myRooms) {
            if (!Memory.createdMiningFlags.includes(roomName)) {
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
        var bestPath = {};
        var bestPathToSource = {};
        var startingPos = {}
        var bestPosPathLength = 10000; //random big number
        for (let position of adjacentTerrainPositions) {
            var path = position.findPathTo(Game.spawns["Spawn1"]);
            var pathLength = path.length;
            if(pathLength < bestPosPathLength) {
                bestPos = position;
                bestPath = Room.serializePath(path);
                var startingPosition = new RoomPosition(path[pathLength - 1]["x"], path[pathLength - 1]["y"], roomName);
                bestPathToSource = Room.serializePath(startingPosition.findPathTo(position));
                startingPos = startingPosition;
                bestPosPathLength = pathLength;
            }
        }
        Memory.sources[source.id] = [bestPath, bestPathToSource, startingPos];
        room.createFlag(bestPos, roomName + "miningFlag" + i);
        Memory.createdMiningFlags.push(roomName);
    }
}

module.exports = mineFlags;