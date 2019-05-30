const events = {
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

module.export = {
    events
};

/*
Borde typ vara att hämta detta från DB. Skall användas sen när vi vet hur man "exporterar" admin!

function demoInitialize(db) {
    // [START demo_initialize]
    // Fetch data from Firestore
    const events = db.collection('events').get()
        .then((documentSet) => {
            // Print the ID and contents of each document
            documentSet.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data());
            });
        })
        .catch((err) => {
            // Error fetching documents
            console.log('Error', err);
        });
    // [END demo_initialize]
}
*/
