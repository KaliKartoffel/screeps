//changed smth again
var ldm = require('longDistantMining')
var spawn = require('spawn')
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');

module.exports.loop = function () {
    for(var i in Memory.creeps) {
        if(!Game.creeps[i]) {
            delete Memory.creeps[i];
            console.log("deleating creep mem")
        }
    }
    if (Game.spawns["Spawn1"].room.energyAvailable >= 450) {
        spawn.run("Spawn1");
    }
    for(let name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.ticksToLive == 1 && creep.memory.role == "harvesterClose") {
            Memory.SpawnQue.push([creep.memory.role, creep.memory.source, creep.memory.pos]);
            console.log("Pushing " + creep.memory.role + " to Que")
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        } else if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        } else if (creep.memory.role == 'repairer' || creep.memory.role == "roadRepairer") {
            roleRepairer.run(creep);
        } else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        } else if (creep.memory.role == 'ldm') {
            if (creep.memory.x === false) {
                creep.memory.x = Math.round(Math.random());
            }
            if (creep.memory.x === 1) {
                ldm.mine(creep, "E52N8", "E52N9"); //TO CONFIGURE
            } else {
                //console.log("pathing right"+creep)
                ldm.mine(creep, "E53N9", "E52N9"); //TO CONFIGURE
            }
        }else if (creep.memory.role == 'scout') {
            
        } else if (creep.memory.test) {
            creep.memory.x = Math.round(Math.random());
        } else {
            console.log("Main loop else trigered");
            roleHarvester.run(creep);
            console.log(creep.name, creep.memory.role);
        }
    }
}