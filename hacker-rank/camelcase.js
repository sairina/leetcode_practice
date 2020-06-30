'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the camelcase function below.
function camelcase(s) {
    //create count var at 1
    //iterate through s
        //if letter is capitalized
            //add 1 to count
    //return count

    let count = 1;

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === s[i].toUpperCase()) {
    //         count += 1;
    //     }
    // }
    
    for (let letter of s) {
        if (letter === letter.toUpperCase()) {
            count += 1;
        }
    }


    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = camelcase(s);

    ws.write(result + "\n");

    ws.end();
}
