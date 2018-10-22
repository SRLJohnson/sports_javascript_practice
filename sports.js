const team = {
  _players: [
    {firstName: "Rusty",
     lastName: "McGee",
     age: 90},
    {firstName: "Speedy",
     lastName: "Sanchez",
     age: 8},
    {firstName: "Dodger",
     lastName: "Mostacioli",
     age: 10},
  ],
  _games: [
    {opponent: "Squirrels",
    teamPoints: 5,
    opponentPoints: 30},
    {opponent: "Dwarf Bunnies",
    teamPoints: 2,
    opponentPoints: 45},
    {opponent: "Tiny Turtles",
    teamPoints: 6,
    opponentPoints: 49},
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    let player = {
      firstName : firstName,
      lastName : lastName,
      age: age,
    };
    this.players.push(player);
  },

  addGame (opponentName, teamPoints, opponentPoints) {
   	let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Sweet Puppies', 8, 10);

console.log(team.players);
console.log(team.games)
