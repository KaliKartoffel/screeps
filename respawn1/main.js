var roleHarvester = require('role.harvester');
var roleSpawnTrans = require('role.spawnTrans');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleBuilder = require('role.builder');
var spawner = require('spawner');

module.exports.loop = function () {
    for (var i in Memory.creeps) {
        if (!Game.creeps[i]) {
            delete Memory.creeps[i];
        }
    }

    spawn = Game.spawns["Spawn1"];
    for (let i in Game.creeps) {
        creep = Game.creeps[i]
        if (creep.memory.role == "harvester") {
            roleHarvester.harvest(creep);
        } else if (creep.memory.role == "spawnTrans") {
            roleSpawnTrans.transToSpawn(creep);
        } else if (creep.memory.role == "upgrader") {
            roleUpgrader.upgradeRC(creep);
        } else if (creep.memory.role == "repairer") {
            roleRepairer.repairClosest(creep);
        } else if (creep.memory.role == "builder") {
            roleBuilder.buildClosest(creep);
        }
    }
    if (Game.spawns["Spawn1"].room.energyAvailable >= 300) {
        spawner.spawnCreep();
    }
} 