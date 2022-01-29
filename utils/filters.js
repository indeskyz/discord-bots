const { VALID_USER, REACTIONS } = require("../config");

const filterReaction = (reaction) => {
	if(REACTIONS.includes(reaction)){
		return true
	}
	return false
};

const filterServer = (serverName, requiredServerName) => {
	if(serverName.toString() === requiredServerName.toString()) {
		return true
	}
	return false
};


const filterUser = (userId) => {
	if(userId === VALID_USER) {
		return true
	}
	return false
};

module.exports = {
    filterReaction,
    filterServer,
    filterUser,
}

