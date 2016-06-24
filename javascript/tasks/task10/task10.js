// 1.  Format with placeholders

console.log("--------------Problem 1--------------");

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

console.log("-------------------------------------");



// 2. HTML binding

console.log("--------------Problem 2--------------");

String.prototype.bind = function(str, options) {

    var regex = new RegExp('data-bind-(.+?)="(.+?)"', 'g'),
        str = this,
        cont = '';

    str = str.replace(regex, function(all, type, value) {
        if (type == 'href') {
            return 'href="' + options[value] + '"';
        } else if (type == 'content') {
            cont = options[value];
            return '';
        } else if (type == 'div') {
            cont = options[value];
            return '';
        } else {
            return type + '="' + options[value] + '"';
        }
    });
    if (cont != '') {
        str = str.replace('</', cont + '</');
    }
    return str;
}

var str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name" data-bind-id="name" data-bind-custom="custom"></а>';
console.log(str.bind(str, { name: 'Elena', link: 'http://telerikacademy.com', custom: 'custom attribute' }));



var str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name" data-bind-div="age"></а>'
console.log(str.bind(str, { name: 'Elena', link: 'http://www.w3schools.com', age: '21 years old' }));


console.log("-------------------------------------");