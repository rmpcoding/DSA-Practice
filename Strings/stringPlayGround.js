let sentence = 'The quick brown fox jumped over the barn yard, and it was impressive.'
let red = 'red';
let yellow = 'yellow';


console.log(sentence.indexOf('q', 1));

function existsInString(string, character) {
    return string.indexOf(character) !== -1;
}


console.log(existsInString(red, 'r'));
console.log(existsInString(red, 'y'));