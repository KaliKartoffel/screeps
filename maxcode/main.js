var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var spawn = require('spawn');
var asdf

module.exports.loop = function () {
    
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }
    
    if (Game.spawns["Spawn1"].room.energyAvailable >= 300) {
        spawn.run("Spawn1");
    }
    
    for (let name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep);
        }
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}; 