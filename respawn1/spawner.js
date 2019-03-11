var spawner = {
    spawnCreep: function () {
        creepsCount = { harvester: 0, spawnTrans: 0, upgrader: 0, repairer: 0, builder: 0 };
        for (let i in Game.creeps) {
            creep = Game.creeps[i]
            switch (creep.memory.role) {
                case "harvester":
                    creepsCount.harvester++;
                    break;
                case "spawnTrans":
                    creepsCount.spawnTrans++;
                    break;
                case "upgrader":
                    creepsCount.upgrader++;
                    break;
                case "repairer":
                    creepsCount.repairer++;
                    break;
                case "builder":
                    creepsCount.builder++;
                    break;

                default:
                    break;
            }
        }

        var role;
        if (creepsCount.harvester < 6) {
            role = "harvester"
            Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], role + Game.time, { memory: { role: role, mining: true } });
        } else if (creepsCount.spawnTrans < 1) {
            role = "spawnTrans"
            Game.spawns["Spawn1"].spawnCreep([CARRY, CARRY, MOVE, MOVE], role + Game.time, { memory: { role: role, mining: true } });
        } else if (creepsCount.upgrader < 1) {
            role = "upgrader"
            Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, CARRY, MOVE, MOVE], role + Game.time, { memory: { role: role, mining: true } });
        } else if (creepsCount.repairer < 1) {
            role = "repairer"
            Game.spawns["Spawn1"].spawnCreep([WORK, MOVE, CARRY, MOVE], role + Game.time, { memory: { role: role, mining: true } });
        } else if (creepsCount.builder < 4) {
            role = "builder"
            Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], role + Game.time, { memory: { role: role, mining: true } });
        } else {
            role = "builder"
            //Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], role + Game.time, { memory: { role: role, mining: true } });
        }

    }
}

module.exports = spawner;