
const csgo = {
    longName: 'Counter-Strike: Global Offensive',
    shortName: 'CS:GO',
    maxPlayers: 5
};

const dota2 = {
    longName: 'Dota 2',
    shortName: 'Dota 2',
    maxPlayers: 5
};

const apexlegends = {
    longName: 'Apex Legends',
    shortName: 'AL',
    maxPlayers: 3
};

const blc2 = {
    longName: 'Battlerite',
    shortName: 'BLC 2',
    maxPlayers: 3
};

const availableGames = [
    csgo,
    dota2,
    apexlegends,
    blc2
];

module.exports = {
    games: availableGames,
};
