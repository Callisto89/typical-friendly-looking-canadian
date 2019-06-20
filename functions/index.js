const functions = require('firebase-functions');
require('./admin');
const availableGames = require('./availableGames');
const events = require('./getEvents');
const { createEvent } = require('./createEvent');


exports.helloWorld = functions
    .region('europe-west1')
    .https.onRequest((request, response) => {
        const greetings = [
            'Hello from Firebase!',
            'from Firebase Hello!',
            'Firebase Hello from!',
            'Dra helvete hej!'
        ];
        response.status(200).send(greetings[Math.floor(Math.random() * greetings.length)]);
    });

// Function that responds with all relevant data to a event
exports.getEvent = functions
    .region('europe-west1')
    .https.onRequest((request, response) => {
        response
            .status(200)
            .type('application/json')
            .send(events);
    });

exports.createEvent = functions
    .region('europe-west1')
    .https.onRequest((request, response) => {
        //        const event = {
        //            eventId: request[1],
        //            DiscordGuildId: request[2]
        //        };

        createEvent();
        console.log('detta är response6: ');
        response
            .status(200)
            .type('application/json')
            .send('Successfully written!');
    });

exports.getAvailableGames = functions
    .region('europe-west1')
    .https.onRequest((request, response) => {
        response
            .status(200)
            .type('application/json')
            .send(availableGames);
    });


// This code also exists in createEvent.js but is commented.
// need to also export/import "admin" somehow
// https://europe-west1-wardr-94a12.cloudfunctions.net/createEvent

/*
const db = admin.firestore();


const createEventResponse = {
    responscode: 200

};

const event = {
    eventId: 1,
    DiscordGuildId: 0,
    isLiveEvent: false,
    maxPlayers: 5,
    playerList: ['Heaton', 'ProHugoLeet', 'Friberg'],
    waitingList: [],
    startDate: Date('January 21, 2075 13:37:00'),
    endDate: Date('January 21, 2076 13:37:00'),
    eventStartedTime: null,
};

db.collection('events').doc().set(event);


module.export = {
    createEventResponse
};
*/
