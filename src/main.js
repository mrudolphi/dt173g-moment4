var fs = require('fs');
var FilePublisher = /** @class */ (function () {
    function FilePublisher(name) {
        this.filename = name;
    }
    FilePublisher.prototype.showFile = function () {
        fs.readFile(this.filename, 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            else {
                var clean;
                clean = data.split(/\W+/g);
                // /\n|[ ,."!?:;/*]+/
                var count = {};
                for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
                    var i = clean_1[_i];
                    count[i] = (count[i] || 0) + 1;
                }
                var sorted = [];
                for (var j in count) {
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
    };
    return FilePublisher;
}());
var obj = new FilePublisher('src/hitch.txt');
obj.showFile();
