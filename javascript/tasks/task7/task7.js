// 1. Planar coordinates

var point1 = new createPoint(9, 7),
    point2 = new createPoint(3, 2),
    point3 = new createPoint(3, 6);


var line1 = new createLine(point1, point2),
    line2 = new createLine(point2, point3),
    line3 = new createLine(point3, point1);


function createPoint(x, y) {
    this.x = x;
    this.y = y;
}

function createLine(pointOne, pointTwo) {
    this.pointOne = pointOne;
    this.pointTwo = pointTwo;
}


function distanceCalculate(pointOne, pointTwo) {
    return (Math.sqrt(Math.pow(pointTwo.x - pointOne.x, 2) + Math.pow(pointTwo.y - pointOne.y, 2))).toFixed(2);
}


function canFormTriangle(line1, line2, line3) {
    if ((line1 + line2 > line3) && (line1 + line3 > line2) && (line2 + line3 > line1)) {
        console.log("Three segment lines can form a triangle.");
        return true;
    } else {
        console.log("Three segment lines can not form a triangle.");
        return false;
    }
}


console.log('Point 1: ' + "x1=" + point1.x + ", " + "y1=" + point1.y);
console.log('Point 2: ' + "x1=" + point2.x + ", " + "y1=" + point2.y);
console.log('Point 3: ' + "x1=" + point3.x + ", " + "y1=" + point3.y);
console.log('Distance between Point 1 and Point 2 is: ' + " " + distanceCalculate(point1, point2));
console.log('Distance between Point 2 and Point 3 is: ' + " " + distanceCalculate(point2, point3));
console.log('Distance between Point 3 and Point 1 is: ' + " " + distanceCalculate(point3, point1));
canFormTriangle(3, 4, 5);
canFormTriangle(3, 1, 1);
canFormTriangle(6, 7, 8);








// 2. Remove elements

Array.prototype.remove = function(elementRemove) {
    var i,
        len = arr.length;
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] == elementRemove) {
            this.splice(i, 1);
            i--;
            len--;
        }
    }
};

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, 6, 7],
    removeEl = 1;
console.log("The array is: [" + arr + "]");
arr.remove(removeEl);
console.log("Element to remove: " + removeEl);
console.log("New array is: [" + arr + "]" + " " + "(after removing element)");










// 3. Deep copy

function clone(object) {
    var cloned = {};
    if (typeof object === "object") {
        for (var i in object) {
            if (object.hasOwnProperty(i)) {
                clone[i] = clone(object[i]);
            }
        }
    } else {
        return object;
    }
    return cloned;
}



var clonedStr,
    clonedNum,
    clonedObj,
    str = "string",
    num = 6,
    obj = {
        firstname: "Kostadin",
        lastname: "Ivanov",
        age: 25,
        toString: function() {
            return "Firstname: " + this.firstname + ", " + "Lastname: " + this.lastname + ", " + "Age: " + this.age;
        }
    };

console.log(str);
console.log(num);
console.log(obj.toString());

clonedStr = clone(str);
clonedNum = clone(num);
clonedObj = clone(obj);

// console.log("Cloned str, num, obj: ");
// console.log("Cloned primitive types:");
// console.log(clonedStr);
// console.log(clonedNum);
// console.log("Cloned reference types:");
// console.log(clonedObj);

clonedStr = "tova e nov string";
clonedNum = 4;
clonedObj = {
    firstname: "Ivan",
    lastname: "Stefanov",
    age: 22,
    toString: function() {
        return "Firstname: " + this.firstname + ", " + "Lastname: " + this.lastname + ", " + "Age: " + this.age;
    }
};

console.log("Cloned primitive types:");
console.log(clonedStr);
console.log(clonedNum);
console.log("Cloned reference types:");
console.log(clonedObj);







// 4. Has property

var obj = {
    firstname: "Ivan",
    lastname: "Ivanov",
    age: 26
};

function hasProperty(property) {
    return obj.hasOwnProperty(property);
}

console.log(obj);
console.log("Age:" + " " + obj.age + " " + hasProperty("age"));
console.log("Egn:" + " " + obj.egn + " " + hasProperty("egn"));
console.log("Lastname:" + " " + obj.lastname + " " + hasProperty("lastname"));




// 5. Youngest person

var theYoungest;

function person(fname, lname, age) {
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    return fname + lname + age;
}

var people = [
    { fname: "Ivan", lname: "Petrov", age: 32 },
    { fname: "Todor", lname: "Kostadinov", age: 46 },
    { fname: "Ivana", lname: "Petrova", age: 34 },
    { fname: "Nasko", lname: "Ivanov", age: 23 },
    { fname: "Katerina", lname: "Ivanova", age: 34 },
    { fname: "Nikolai", lname: "Spasov", age: 43 }
];

function findTheYongestPerson() {
    //theYoungest = findTheYongestPerson(people);
    theYoungest = people[0].age;
    for (var i = 0, len = people.length; i < len; i++) {

        if (people[i].age < theYoungest) {
            theYoungest = people[i].age;
            console.log("The youngest person is: " + people[i].fname + ' ' + people[i].lname + ', ' + people[i].age + " years old");
        }
    }
}
findTheYongestPerson();  





// 6.

var arr = [
    { fname: "Ivan", lname: "Petrov", age: 32 },
    { fname: "Nasko", lname: "Kostadinov", age: 46 },
    { fname: "Ivana", lname: "Petrova", age: 34 },
    { fname: "Nasko", lname: "Ivanov", age: 23 },
    { fname: "Katerina", lname: "Ivanova", age: 34 },
    { fname: "Nikolai", lname: "Spasov", age: 43 }
];