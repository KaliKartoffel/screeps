var roleHarvester = require('role.harvester');
var roleSpawnTrans = require('role.spawnTrans');
var roleUpgrader = require('role.upgrader');
var spawner = require('spawner');

var roleBuilder = {
    buildClosest: function (creep) {
        if (creep.memory.mining == undefined) {
            creep.memory.mining = true;
        }
        if (creep.memory.mining && creep.carry.energy == creep.carryCapacity) {
            creep.memory.mining = false;
        }
        else if (!creep.memory.mining && creep.carry.energy == 0) {
            creep.memory.mining = true;
            delete creep.memory.withdrawSourceId;
        }
        if (creep.memory.mining) {
            var sources = creep.room.find(FIND_STRUCTURES, { filter: object => object.structureType == STRUCTURE_CONTAINER });
            try {
                if (!sources[0]) {
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                } else {
                    if (!creep.memory.withdrawSourceId) {
                        creep.memory.withdrawSourceId = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: object => (object.structureType == STRUCTURE_CONTAINER && object.store[RESOURCE_ENERGY] >= 1000 + Math.random() * 100) }).id;
                    }
                    var sourceId = creep.memory.withdrawSourceId;
                    if (creep.withdraw(Game.getObjectById(sourceId), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(Game.getObjectById(sourceId));
                    }
                }
            } catch (error) {
                
            }
        }
        else {
            var target = creep.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES);
            if (creep.build(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
            if (!target) {
                roleUpgrader.upgradeRC(creep);
            }
        }
    }
}

module.exports = roleBuilder;