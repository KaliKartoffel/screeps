var garbageCollector = require('garbageCollector');
var spawnCreeps = require('spawnCreeps');
var spawnCreepWorking = require('spawnCreepWorking')

module.exports.loop = function () {
    spawnCreeps.run();
    garbageCollector.run();

    for (let i in Game.creeps) {
        creep = Game.creeps[i];
        if (creep.memory.role === "harvesterClose") {
            var harvesterClose = require('harvesterClose');
            harvesterClose.run(creep); 
        } else if (creep.memory.role === "carry") {
            var carry = require('carry');
            carry.run(creep);
        }
    }
} 