var MyName;
var myAge;
var isFemale = true;
MyName = "Nadejda";
myAge = "23";
var arr = [];
var a = 6;
var b = a + 7;
var c = a/b;
var counter;
var count = 6.6;
var PI = Math.PI;
var parsenum = parseInt (115.66);
var n = 4;
var m = 3;
var sum = (n+m)*2;
var stepenuvane = Math.pow(25, 2);
var greaterNM = (m > n);
var equal = (m == 3); //true
var result = 5.5 / 2.5;
var result1 = 6 / "5gasfsa";
var result2 = "adsadas" / 7;
var str = '"The champion ot EURO 2016 might be Germany."-said in the news';
var str1 = "'My favourite national team is England.'-said Peter";
var question = '\"What is your favourite sport?\"-asked the teacher.';
var res1 = question.toLowerCase();
var champion = null;
var firstname = "Nadezhda";
var lastname = "Ivanova";
var fullname = (firstname + " " + lastname);
var tiger = {};
var dog = {color: "white"};
var obj = null;
var beer = undefined;
var z = 1;
var floatnumber = 6.6;
var team = "England";
var res = team.toUpperCase();
x = new  Number(666);
y = null;
z = new Number(6);
arr[0] = 7;
arr[1] = "pesho";
arr[100] = 5;
arr[1].isFemale = false;












console.log(MyName + "\t" + myAge);
console.log(typeof (myAge));
console.log(typeof (isFemale));
console.log(MyName.substring(0, 4));
console.log((arr[0]) + "," + typeof (arr[0]));
console.log(arr[1]);
console.log(typeof(arr[1]));
console.log(a);
console.log(b);
console.log(c);
console.log(typeof (c));
console.log(typeof (counter)); //undefined
console.log(count + "\t" + typeof (count)); //number
console.log(PI);
console.log(sum + "\t" + typeof(sum));
console.log(greaterNM + "\t" + typeof(greaterNM));
console.log(equal + "\t" + typeof(equal)); //true boolean
console.log(result + "\t" + typeof(result));
console.log(result1 + "\t" + typeof(result1)); //Nan  number
console.log(result2 + "," + typeof(result2)); //Nan,number
console.log(str + "," + typeof(str));
console.log(str1 + "\t" + typeof(str1));
console.log(question + "," + typeof(question));
console.log(res1 + "\t" + typeof(res));
console.log(champion + "\t" + typeof(champion));
console.log(parsenum + "," + typeof(parsenum));
console.log(fullname + "\t" + typeof(fullname));
console.log(stepenuvane + "," + typeof(stepenuvane)); //25^2 = 625, number
console.log(Math.ivo + " " + typeof(Math.ivo));
console.log(tiger + "\t" + typeof(tiger));
console.log(dog.color + "\t" + typeof(dog.color));
console.log(dog + "\t" + typeof(dog));
console.log(obj + "," + typeof(obj));
console.log(x + "\t" + typeof(x));
console.log(y + "," + typeof(y));
console.log(typeof (5)); //number
console.log(typeof "Liverpool"); //string
console.log(typeof true); //boolean
console.log(typeof Peterrrr); //undefined
console.log(beer + "," + typeof(beer)); //undefined
console.log(z + "," + typeof(z));
console.log(floatnumber + "\t" + typeof(floatnumber));
console.log(team + "\t" + res + "," + typeof(res));