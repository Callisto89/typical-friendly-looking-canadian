// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
	
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {

    var slump = Math.floor(Math.random()* 3) +1

switch (slump) {

case 1: 
response.status(201).send("Hello from Firebase!");
break;

case 2: 
response.status(200).send("from Firebase Hello!");
break;

case 3: 
response.status(200).send("Firebase Hello from!");
break;
}
});



  
// Function that responds with all relevant data to a event
exports.getEvent = functions.https.onRequest((request, response) => {


let event = {
     eventId : 1,
     DiscordGuildId: 0,
     isLiveEvent: false,
     maxPlayers: 5,
     playerList: ['Heaton','ProHugoLeet','Friberg'],
     waitingList: [],
     startDate: Date("January 21, 2075 13:37:00"),
     endDate: Date("January 21, 2076 13:37:00"),
     eventStartedTime: null,
};

    response.status(200).send(event);
  }); 