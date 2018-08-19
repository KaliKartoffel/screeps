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
        var pathToSource = spawn.findPathTo(source);
        var pathToSpawn = source.findPathTo(mySpawn);


        Memory.sources[source.id] = [bestPath, pathToSource, pathToSpawn];
        room.createFlag(pathToSource[pathToSource.length - 1], "miningFlag" + i + roomName);
        Memory.createdMiningFlags.push(roomName);
    }
}


module.exports = mineFlags;