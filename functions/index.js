const functions = require('firebase-functions');
require('./admin');
const availableGames = require('./availableGames');
const events = require('./getEvents');
const { createEvent } = require('./createEvent');
const { checkEvent } = require('./checkEvent');

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
        const event = {
            discordGuildId: Number.parseInt(request.body.discordGuildId, 10),
            isLiveEvent: request.body.isLiveEvent,
            maxPlayers: 5, // Should be read from user settings
            playerList: ['fromCreateEvent', 'ProHugoLeet', 'Friberg'], // Should be empty?
            waitingList: null, // Is this a empty list? [] gives error.
            startDate: request.body.startDate,
            endDate: request.body.endDate,
            eventStartedTime: null, // Not started at creation!
        };

        const inputCheckResponse = checkEvent(event);
        if (inputCheckResponse !== null) {
            // inputCheck should be null!
            // else something is wrong, return stuff!
            console.warn('Felaktig input', event);
            response
                .status(inputCheckResponse.responseCode)
                .type('application/json')
                .send(inputCheckResponse.responseMessage);
        }


        const createEventResponse = createEvent(event);
        if (createEventResponse.responseCode !== 200) {
            console.error('Event misslyckades att skapas!', event);
        }
        response
            .status(createEventResponse.responseCode)
            .type('application/json')
            .send(createEventResponse.responseMessage);
    });


exports.getAvailableGames = functions
    .region('europe-west1')
    .https.onRequest((request, response) => {
        response
            .status(200)
            .type('application/json')
            .send(availableGames);
    });
