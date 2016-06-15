// 1. Exchange if greater
// 1-vi nachin

function greaterNumber(a, b) {
    var result;
    if (b > a) {
        result = a;
        a = b;
        b = result;
        console.log(a, b);
    } else {
        console.log(a, b);
    }
}
greaterNumber(5, 6);
greaterNumber(7, 6);


// 2-ri nachin
// Tuk ukazvam da se vuvejdat razlichni chisla

function greater(c, d) {
    if ((c > d) || (d > c)) {
        console.log(Math.max(c, d) + "\t" + Math.min(c, d));
    } else if ((c === d) || (d === c)) {
        console.log("The numbers are equal. Enter different numbers.");
    }
}
greater(7, 6);
greater(1, 6);
greater(6, 6);






// 2. Multiplication Sign

function multSign(a, b, c) {
    if (a == 0 || b == 0 || c == 0) {
        console.log("0");
    } else if ((a < 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c > 0) || (a > 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c < 0)) {
        console.log("-");
    } else {
        console.log("+");
    }
}
multSign(-1, 5, 1);
multSign(-1, -1, 5);
multSign(0, 6, 5);
multSign(-1, -6, -5);
multSign(1, 6, 5);







// 3. The biggest of Three

function biggestNumber(a, b, c) {
    var biggest;
    if ((a === b) && (b === c) && (a === c)) {
        return biggest = "Numbers are equal. Enter the different numbers to find the biggest.";
    } else {
        if (a > b) {
            if (a > c) {
                return biggest = a;
            } else {
                return biggest = c;
            }

        } else if (c > b) {
            return biggest = c;
        } else {
            return biggest = b;
        }
    }
}
console.log(biggestNumber(150, 15, 16));
console.log(biggestNumber(100, 100, 100));
console.log(biggestNumber(2, 4, 6));







// 3. with Math.max()

function biggestNum(a, b, c) {
    console.log(Math.max(a, b, c));
}
biggestNum(6, 7, 1);








// 4. Sort 3 numbers

function sort3Numbers(x, y, z){
if((x > y) && (x > z)){
	if (y > z){
		console.log(x + "\t" + y + "\t" + z);
	}
	else{
		console.log(x + "\t" + z + "\t" + y);
	}
}
if((y > x) && (y > z)){
	if(x > z){
		console.log(y + "\t" + x + "\t" + z);
	}
	else{
		console.log(y + "\t" + z + "\t" + x);
	}
}
if((z > x) && (z > y)){
	if (x > y){
		console.log(z + "\t" + x + "\t" + y);
	}
	else{
		console.log(z + "\t" + y + "\t" + x);
	}
}
}
sort3Numbers(1, 6, 3);
sort3Numbers(2, 6, 11);
sort3Numbers(5, 1, 4);
sort3Numbers(1, 6, 8);







// 5. Digit as word

function digitAsWord(digit){
	switch(digit){
		case 0: console.log("zero"); break;
		case 1: console.log("one"); break;
		case 2: console.log("two"); break;
		case 3: console.log("three"); break;
		case 4: console.log("four"); break;
		case 5: console.log("five"); break;
		case 6: console.log("six"); break;
		case 7: console.log("seven"); break;
		case 8: console.log("eight"); break;
		case 9: console.log("nine"); break;
		case 10: console.log("ten"); break;
		default: console.log("not a digit");
	}
}
digitAsWord(-1);
digitAsWord("hi");
digitAsWord(1);
digitAsWord(0);
digitAsWord(3);
digitAsWord(4);
digitAsWord(5);
digitAsWord(6);





// 6. Quadratic equation

function decideEquation(a, b, c){
	var d = (Math.pow(b, 2) - (4*a*c));
	var x1;
	var x2;
	if(d > 0){
		x1 = ((- b + Math.sqrt(d))/(2*a));
		x2 = ((- b - Math.sqrt(d))/(2*a));
		console.log("x1 = " + x1 + ",\t" + "x2 = " + x2);
	}
	else if(d === 0){
		x1 = ((-b)/(2*a));
		x2 = ((-b)/(2*a));
		console.log("x1 = x2 = " + x1);
	}
	else if(d < 0){
		console.log("no real roots; there are imaginary roots");
	}
}
decideEquation(-1, 3, 0);
decideEquation(-2, 4, -2);
decideEquation(5, 2, 8);







// 7. The biggest of five numbers

function getBiggest(a, b, c, d, e){
	var biggest;
	if((a >= b) && (a >= c) && (a >= d) && (a >= e)){
		biggest = a;
		console.log("The biggest of five numbers is: " + biggest);
	}
	else if((b >= a) && (b >= c) && (b >= d) && (b >= e)){
		biggest = b;
		console.log("The biggest of five numbers is: " + biggest);
	}
	else if((c >= a) && (c >= b) && (c >= d) && (c >= e)){
		biggest = c;
		console.log("The biggest of five numbers is: " + biggest);
	}
	else if((d >= a) && (d >= b) && (d >= c) && (d >= e)){
		biggest = d;
		console.log("The biggest of five numbers is: " + biggest);
	}
	else if((e >= a) && (e >= b) && (e >= c) && (e >= d)){
		biggest = e;
		console.log("The biggest of five numbers is: " + biggest);
	}
}
getBiggest(14, 14, 8, 8, 7);