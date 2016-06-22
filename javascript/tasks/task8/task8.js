// 1. Make person

console.log("--------------Problem 1----------------");

function Person(firstname, lastname, age, gender) {
    this.firstname = firstname,
        this.lastname = lastname,
        this.age = age,
        this.gender = gender;
};


function createPerson() {
    var randomAge,
        randomIndex,
        randomGender;

    var arrFirstNameF = ["Stanislava", "Nadezhda", "Iliana", "Eleonora", "Iordanka", "Zornica"];
    var arrLastNameF = ["Petrova", "Ivanova", "Blagoeva", "Todorova", "Atanasova", "Koleva"];
    var arrFirstNameM = ["Svetoslav", "Kostadin", "Aleksandur", "Atanas", "Radostin", "Radoslav"];
    var arrLastNameM = ["Georgiev", "Petrov", "Kostadinov", "Durchov", "Ivanov", "Teodorov"];

    randomAge = Math.floor((Math.random() * 100));
    randomIndex = Math.floor((Math.random() * 6));
    randomGender = !!(Math.round(Math.random()));


    function checkGender(gender) {
        if (gender === true) {
            var personF = new Person(arrFirstNameF[randomIndex], arrLastNameF[randomIndex], randomAge, randomGender);
            return personF;
        }
        var personM = new Person(arrFirstNameM[randomIndex], arrLastNameM[randomIndex], randomAge, randomGender);
        return personM;
    }
    return checkGender(randomGender);
}

function peopleArrGenerator(count) {
    var people = [];
    for (var i = 0; i < count; i++) {
        people.push(createPerson());
    }
    return people;
}
console.log(peopleArrGenerator(10));

console.log("---------------------------------------");










// 2. People of age

console.log("--------------Problem 2----------------");

function getAdults(arr) {

    var ageAbove18 = arr.every(function(item) {
        return item.age >= 18;
    });

    return ageAbove18;
}
console.log(getAdults(peopleArrGenerator(5)));

console.log("---------------------------------------");





// 3. Underage people

console.log("--------------Problem 3----------------");

function getUnder18(arr) {
    var ageUnder18 = arr.filter(function(item) {
        return item.age < 18;
    });
    return ageUnder18;
}

var arr1 = peopleArrGenerator(7);
console.log(arr1);
console.log(getUnder18(arr1));

console.log("---------------------------------------");






// 4. Average age of females

console.log("--------------Problem 4----------------");

function femalesFunction(arr){
	return arr.gender === true;
}
	var arrF = peopleArrGenerator(6);
	var females=arrF.filter(femalesFunction);
	var ageSum = 0;
	var counter=0;
	var sum = females.forEach(function (item){
	 		counter++;
	 		return ageSum = ageSum + item.age;
	 		 
	  });
		var average=ageSum/counter;
		var fixed = average.toFixed(2);

console.log(females);
console.log(fixed);

console.log("---------------------------------------");



console.log("--------------Problem 5----------------");

var arr = peopleArrGenerator(5);

arr.sort(function(a, b) {
    return a.age - b.age;
});


//var sorted = arr.sort();
var theYongestM = arr.find(function findMales(person) {
    return person.gender === false;
});


//var onlyMales = arr.filter(males);


console.log(arr);
console.log(theYongestM);
console.log("---------------------------------------");