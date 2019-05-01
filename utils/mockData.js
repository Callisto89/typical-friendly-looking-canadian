const getUpcomingEvents = () => {
    return new Promise((resolve, reject) =>
        resolve([
            {
                name: 'Counter-Strike',
                startDate: Date.now(),
                maxPlayers: 5,
                players: ['Callisto', 'inSym8', 'ProHugoLeet', 'Friberg'],
                waitingList: [],
            },
            {
                name: 'Counter-Strike',
                startDate: Date.now() + 360 * 1000,
                maxPlayers: 5,
                players: ['Callisto', 'inSym8', 'ProHugoLeet',],
                waitingList: [],
            },
            {
                name: 'Counter-Strike',
                startDate: Date.now() + 360 * 10000000,
                maxPlayers: 5,
                players: ['Callisto', 'inSym8', 'ProHugoLeet', 'KennyKentaur', 'CAINE_THE_PAIN',],
                waitingList: ['friberg',],
            },
        ])
    );
};

export {
    getUpcomingEvents,
}