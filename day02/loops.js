'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .trim()
    .split('\n')
    .map(string => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let ary = s.split('');
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  ary.forEach(function(el) {
    if (vowel.indexOf(el) > -1) {
      console.log(el);
    }
  });
  ary.forEach(function(el) {
    if (vowel.indexOf(el) < 0) {
      console.log(el);
    }
  });
}

//indexOf => 找出相同字母的位置，有則回傳位置，沒有則回傳-1

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
