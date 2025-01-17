'use strict';

const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  ' ': ' '
};

function strChange(line){
  return line.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*{10}/, ' ');
}

function decode(expr) {
  let arr = [];
  let arr1 = [];
  expr = expr.replace(/(.{10})/gi, '$1 ');
  arr = expr.trim().split(' ');
  arr1 = arr.map(item => MORSE_TABLE[strChange(item)]).join('');
  return arr1;
}

module.exports = {
  decode
};

