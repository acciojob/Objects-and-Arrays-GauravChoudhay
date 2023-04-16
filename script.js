const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team = players;

// Create a variable team1 that is a copy of players
const team1 = [...players];

// Create a variable cap1 that is a copy of person object
const cap1 = { ...person };

const team = players;
const team1 = [...players];
const cap1 = Object.assign({}, person);



export {players,person,team,team1,cap1}