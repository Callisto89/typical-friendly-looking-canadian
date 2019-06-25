const { db } = require('./admin');

const createEvent = () => {
    db.collection('events').doc().set(event);
    // dbResponse.then(console.log('dbResponse:', dbResponse)); kolla med Ins.
    // om dbskrivning går fel vill vi fånga fel?
    console.log('Create Event Triggerrrred');
    const responseStructure = {
        responseCode: 200,
        responseMessage: 'Creation OK! (fromCreateEvent.js)'
    };
    return responseStructure;
};

const event = {
    eventId: 1,
    DiscordGuildId: 0,
    isLiveEvent: false,
    maxPlayers: 5,
    playerList: ['fromCreateEvent', 'ProHugoLeet', 'Friberg'],
    waitingList: [],
    startDate: Date('January 21, 2075 13:37:00'),
    endDate: Date('January 21, 2076 13:37:00'),
    eventStartedTime: null,
};
module.exports = { createEvent };
