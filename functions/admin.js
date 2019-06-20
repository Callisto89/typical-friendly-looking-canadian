// The Firebase Admin SDK to access the Firebase Realtime Database.
require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

module.exports = {
    db
};
