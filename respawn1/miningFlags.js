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
    var mySpawn = Game.spawns["Spawn1"];
    for (let i in sources) {
        var source = sources[i];
        var pathToSource = mySpawn.pos.findPathTo(source);
        var pathToCont = source.pos.findPathTo(mySpawn);
        Memory.sources[source.id] = {pathToSource: pathToSource, pathToCont: pathToCont, start: new RoomPosition(pathToSource[0]["x"], pathToSource[0]["y"], roomName), dispencingPos: new RoomPosition(pathToSource[1]["x"], pathToSource[1]["y"], roomName)};
        room.createFlag(new RoomPosition(pathToCont[0]["x"], pathToCont[0]["y"], roomName), "miningFlag" + i + roomName);
    }
    Memory.createdMiningFlags.push(roomName);
}


module.exports = mineFlags;