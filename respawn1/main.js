

module.exports.loop = function () {
    var spawnCreeps = require('spawnCreeps');
    var garbageCollector = require('garbageCollector');

    for (let creep of Game.creeps) {
        if (creep.memory.role === "harvesterClose") {
            var harvesterClose = require('harvesterClose');
            harvesterClose.run(creep); 
        } else if (creep.memory.role === "carry") {
            var carry = require('carry');
            carry.run(creep);
        }
    }
}