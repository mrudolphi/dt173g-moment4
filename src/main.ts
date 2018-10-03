/*
 * DT173G - Webbutveckling III
 * Moment 4 - Typescript
 * Maria Rudolphi
 * 2018-10-03
 */

// declare require to use require in typescript
declare function require(name:string);
var fs = require('fs');

// define class to read files, takes name as an parameter
class FilePublisher {
    filename: string;

    constructor(name: string) {
        this.filename = name;
    }

    // function to read and show file
    showFile(): void {
        fs.readFile(this.filename, 'utf8', function(err, data) {
            if (err) {
                throw err;
            }
            else {
                // split file content in array including all words
                var clean: string[];
                clean = data.split(/\W+/g);

                // count how many times every word is repeated
                let count = {};
                for (let i of clean) {
                    count[i] = (count[i]||0) + 1;
                }

                // add all words with at least 10 letters to array sorted
                let sorted = [];
                for (let j in count) {
                    if (j.length >= 10) {
                        sorted.push([j, count[j]]);
                    }
                }

                // sort words and reverse, most used word first, write 10 most used words
                sorted.sort(function (a, b) {
                    return a[1] - b[1];
                });
                sorted.reverse();

                console.log('Det här är de 10 mest förekommande orden med minst 10 tecken ur boken "The hitchhickers guide to the galaxy"');
                console.log(sorted.slice(0, 10));
            }
        });
    }
}

// define new FilePublisher with filename 'src/hitch.txt' and call showFile() to write 10 most used words with at least 10 letters
let obj = new FilePublisher('src/hitch.txt');
obj.showFile();