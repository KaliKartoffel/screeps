var upgrader = require("upgrader1");
var builder = require("builder1");
var spawnerCreeps =  require("spawnerCreeps1");

/* not implemented yet */

var dispercer = {
    run: function(creep) {
        switch (creep.memory.role) {
            case "dispercerUpgrader":
                upgrader.run();
                break;
            case "dispercerBuilder":
                builder.run();
                break;
            default:
                spawnerCreeps.run();
                break;
        }
    }
}

module.exports = dispercer;