

module.exports.loop = function () {
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