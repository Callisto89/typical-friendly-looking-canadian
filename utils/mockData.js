const getUpcomingEvents = () => {
    return new Promise((resolve, reject) => 
        resolve([{
            name: 'Counter-Strike',
            startDate: Date.now(),
            maxPlayers: 5,
            players: ['Callisto', 'inSym8', 'ProHugoLeet', 'Friberg'],
            }])
    );
};

export {
    getUpcomingEvents,
}