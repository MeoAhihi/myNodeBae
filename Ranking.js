const prompt = require('prompt-sync')();

const full_name = prompt('What is your name? ')
const score = +prompt('What is your score? ')
const BOUNDARY_SCORE = 5

function Ranking(score) {
    if (typeof score != 'number') return '<undefined>'
    if (score > BOUNDARY_SCORE) {
        return 'Passed'
    } else {
        return 'Failed'
    }
}

console.log(full_name.toUpperCase() + ' ' + Ranking(score));