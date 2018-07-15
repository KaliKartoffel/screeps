var transfer = {
    function(creep, dest_id) { 
        if(creep.transfer(Game.getObjectById(dest_id)) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.getObjectById(dest_id));
        }
	}
};

module.exports = harvestE;