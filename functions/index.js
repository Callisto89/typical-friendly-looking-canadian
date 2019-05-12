// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const availableGames = require('./availableGames');

admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
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

        response.status(200).send(event);
    });

exports.getAvailableGames = functions
    .region('europe-west1')
    .https.onRequest((request, response) => {
        response
            .status(200)
            .type('application/json')
            .send(availableGames);
    });