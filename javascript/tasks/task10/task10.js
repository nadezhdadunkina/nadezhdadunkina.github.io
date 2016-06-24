

// 1.  Format with placeholders


String.prototype.format = function(options) {
    var i,
        str = this;
    for (i in options) {
        var regex = new RegExp('#{' + i + '}', 'g'); // g - global
        str = str.replace(regex, options[i]);
    }
    return str;

}

var str1 = "Hello, there! Are you #{name}?";
var str2 = "My name is #{name} and I am #{age}-years-old";

console.log(str1.format({ name: 'John' }));
console.log(str2.format({ name: 'John', age: 13 }));

