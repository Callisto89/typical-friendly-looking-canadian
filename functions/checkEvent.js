
const checkEvent = (request) => {
    const event = request;
    if (!Number.isInteger(event.discordGuildId)) {
        const responseStructure = {
            responseCode: 400,
            responseMessage: 'discordGuildId should be a number(fromCheckEvent.js)'
        };
        return responseStructure;
    }
    return null;

    // Should continue here with checks for all inputs
    // Mandatory should always be checked and take input param for extra
    // variables
};


module.exports = { checkEvent };
