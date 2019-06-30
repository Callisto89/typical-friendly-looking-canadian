const { db } = require('./admin');

const createEvent = () => {
//    if (checkInput(request, response) === true) {
//        console.log('create Event input ok!', request);
//    } else {
//        console.error('create event input not ok!');
//        return ('400');
//    }

    db.collection('events').doc().set(event);
    console.log('Create Event Triggerrrred');
    return ('200');
};

// const checkInput = () => {
//     console.log('inputcheck');
//     return true;
// };

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

// module.export = createEvent();

module.exports = { createEvent };
