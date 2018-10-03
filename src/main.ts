declare function require(name:string);
var fs = require('fs');

class FilePublisher {
    filename: string;

    constructor(name: string) {
        this.filename = name;
    }

    showFile(): void {
        fs.readFile(this.filename, 'utf8', function(err, data) {
            if (err) {
                throw err;
            }
            else {
                var clean: string[];
                clean = data.split(/\W+/g);
                // /\n|[ ,."!?:;/*]+/
                let count = {};

                for (let i of clean) {
                    count[i] = (count[i]||0) + 1;
                }

                let sorted = [];

                for (let j in count) {
                    if (j.length >= 10) {
                        sorted.push([j, count[j]]);
                    }
                }

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

let obj = new FilePublisher('src/hitch.txt');
obj.showFile();