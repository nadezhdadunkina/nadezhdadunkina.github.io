// // 1. Numbers

function nNumbers(n) {
    for (var i = 0; i < n; i++) {
        console.log("Number: " + i);
    }
}
nNumbers(14);




// // 2. Numbers not divisible

function numbersDiv(n) {
    for (var i = 0; i < n; i++) {
        if (!((i % 3 == 0) && (i % 7 == 0))) {
            console.log("Number: " + i);
        }
    }
}
numbersDiv(88);




// 3. Min/Max of sequence

var min = Math.min(1, 34, 54, 643, 65, 56, 76, 67);
var max = Math.max(1, 34, 54, 643, 65, 56, 76, 67);

console.log("Min number:" + min);
console.log("Max number:" + max);




// 4. Lexicographically smallest

function minMaxProperty(object) {
    var min = "z";
    var max = "a";
    for (var property in object) {
        if (property > max) {
            max = property;
        }
        if (property < min) {
            min = property;
        }
    }
    console.log("Object: " + object);
    console.log("Min property: " + min);
    console.log("Max property: " + max);
}
minMaxProperty(document);
minMaxProperty(window);
minMaxProperty(navigator);
