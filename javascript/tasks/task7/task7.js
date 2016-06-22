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
            cloned[i] = clone(object[i]);
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
        address: {
            street: "Luben Karavelov",
            number: 5,
            city: "Razlog",
            toString: function() {
                return "Address: " + this.city + ", " + this.street + " N" + this.number
            }
        },
        toString: function() {
            return "Firstname: " + this.firstname + ", " + "Lastname: " + this.lastname + ", " + "Age: " + this.age + ", " + this.address;
        }
    };

console.log(str);
console.log(num);
console.log(obj.toString());

clonedStr = clone(str);
clonedNum = clone(num);
clonedObj = clone(obj);

str = "tova e nov string";
num = 4;
obj.firstname = "petko";

console.log("Cloned primitive types:");
console.log(clonedStr);
console.log(clonedNum);
console.log("Cloned reference types:");
console.log(clonedObj.toString());






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

var people = [
    { firstname: "Ivan", lastname: "Petrov", age: 32 },
    { firstname: "Todor", lastname: "Kostadinov", age: 46 },
    { firstname: "Ivana", lastname: "Petrova", age: 34 },
    { firstname: "Nasko", lastname: "Ivanov", age: 23 },
    { firstname: "Katerina", lastname: "Ivanova", age: 26 },
    { firstname: "Nikolai", lastname: "Spasov", age: 43 }
];

function findTheYongestPerson() {
    var theYoungest = people[0].age;
    var youngestIndex = 0;

    for (var i = 0, len = people.length; i < len; i++) {
        if (people[i].age < theYoungest) {
            theYoungest = people[i].age;
            youngestIndex = i;
        }
    }
    console.log(youngestIndex);
    console.log("The youngest person is: " + people[youngestIndex].firstname + ' ' + people[youngestIndex].lastname + ', ' + people[youngestIndex].age + " years old");
}
findTheYongestPerson();




// 6. Write a function that groups an array of people by age, first or last name.
// The function must return an associative array, with keys - the groups, and values - arrays with people in this groups.

var people = [
    { firstname: "Sasho", lastname: "Petrov", age: 32 },
    { firstname: "Nasko", lastname: "Kostadinov", age: 46 },
    { firstname: "Ivana", lastname: "Petrova", age: 34 },
    { firstname: "Nasko", lastname: "Ivanov", age: 23 },
    { firstname: "Katerina", lastname: "Ivanova", age: 34 },
    { firstname: "Nikolai", lastname: "Spasov", age: 43 }
];

function groupBy(arr, property) {
    var groupArr = {}; // asociativen masiv

    for (var i = 0, len = arr.length; i < len; i++) {
        var key = arr[i][property];
        var peopleInGroup = groupArr[key] || [];
        //ako v groupArr[key] ima stoinost, to vzima neq; ako nqma stoinost, to vzima prazen masiv

        peopleInGroup.push(arr[i]);
        //dobavq arr[i] kym masiva, v koito ima groupArr[key] (ili masivut e prazen)

        groupArr[key] = peopleInGroup;
        //na key mu davame stoinost peopleInGroup; masiv ot 1 element (Array[1])
    }
    return groupArr; //vrushta asociativniq masiv
}
console.log(groupBy(people, "firstname"));
console.log(groupBy(people, "lastname"));
console.log(groupBy(people, "age"));