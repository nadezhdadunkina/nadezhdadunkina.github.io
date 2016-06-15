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

function sort3Numbers(x, y, z) {
    if ((x > y) && (x > z)) {
        if (y > z) {
            console.log(x + "\t" + y + "\t" + z);
        } else {
            console.log(x + "\t" + z + "\t" + y);
        }
    }
    if ((y > x) && (y > z)) {
        if (x > z) {
            console.log(y + "\t" + x + "\t" + z);
        } else {
            console.log(y + "\t" + z + "\t" + x);
        }
    }
    if ((z > x) && (z > y)) {
        if (x > y) {
            console.log(z + "\t" + x + "\t" + y);
        } else {
            console.log(z + "\t" + y + "\t" + x);
        }
    }
}
sort3Numbers(1, 6, 3);
sort3Numbers(2, 6, 11);
sort3Numbers(5, 1, 4);
sort3Numbers(1, 6, 8);







// 5. Digit as word

function digitAsWord(digit) {
    switch (digit) {
        case 0:
            console.log("zero");
            break;
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        case 10:
            console.log("ten");
            break;
        default:
            console.log("not a digit");
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

function decideEquation(a, b, c) {
    var d = (Math.pow(b, 2) - (4 * a * c));
    var x1;
    var x2;
    if (d > 0) {
        x1 = ((-b + Math.sqrt(d)) / (2 * a));
        x2 = ((-b - Math.sqrt(d)) / (2 * a));
        console.log("x1 = " + x1 + ",\t" + "x2 = " + x2);
    } else if (d === 0) {
        x1 = ((-b) / (2 * a));
        x2 = ((-b) / (2 * a));
        console.log("x1 = x2 = " + x1);
    } else if (d < 0) {
        console.log("no real roots; there are imaginary roots");
    }
}
decideEquation(-1, 3, 0);
decideEquation(-2, 4, -2);
decideEquation(5, 2, 8);







// 7. The biggest of five numbers

function getBiggest(a, b, c, d, e) {
    var biggest;
    if ((a >= b) && (a >= c) && (a >= d) && (a >= e)) {
        biggest = a;
        console.log("The biggest of five numbers is: " + biggest);
    } else if ((b >= a) && (b >= c) && (b >= d) && (b >= e)) {
        biggest = b;
        console.log("The biggest of five numbers is: " + biggest);
    } else if ((c >= a) && (c >= b) && (c >= d) && (c >= e)) {
        biggest = c;
        console.log("The biggest of five numbers is: " + biggest);
    } else if ((d >= a) && (d >= b) && (d >= c) && (d >= e)) {
        biggest = d;
        console.log("The biggest of five numbers is: " + biggest);
    } else if ((e >= a) && (e >= b) && (e >= c) && (e >= d)) {
        biggest = e;
        console.log("The biggest of five numbers is: " + biggest);
    }
}
getBiggest(14, 14, 8, 8, 7);
getBiggest(1, 2, 3, 3, 4);
getBiggest(14, 5, 8, 86, 71);
getBiggest(7, 6, 6, 9, 69);





// 8. Number as words

function numberAsWord(number) {
    var text = "The english word for number is: ";
    var singles = Math.floor(number % 10);
    var decades = Math.floor((number / 10) % 10);
    var specials = singles + 10;
    var hundreds = Math.floor((number / 100) % 10);
    var result;
    var specialsAsNumber = ((Math.floor((number / 10) % 10)) * 10 + (Math.floor(number % 10)));

    if (isNaN(number) || (number > 999)) {
        result = "Error!";
    } else {
        switch (specials) {
            case 11:
                specials = "Eleven";
                break;
            case 12:
                specials = "Twelve";
                break;
            case 13:
                specials = "Thrirteen";
                break;
            case 14:
                specials = "Fourteen";
                break;
            case 15:
                specials = "Fifteen";
                break;
            case 16:
                specials = "Sixteen";
                break;
            case 17:
                specials = "Seventeen";
                break;
            case 18:
                specials = "Eighteen";
                break;
            case 19:
                specials = "Nineteen";
                break;
        }
        switch (hundreds) {
            case 1:
                hundreds = "One hundred and ";
                break;
            case 2:
                hundreds = "Two hundred and ";
                break;
            case 3:
                hundreds = "Three hundred and ";
                break;
            case 4:
                hundreds = "Four hundred and ";
                break;
            case 5:
                hundreds = "Five hundred and ";
                break;
            case 6:
                hundreds = "Six hundred and ";
                break;
            case 7:
                hundreds = "Seven hundred and ";
                break;
            case 8:
                hundreds = "Eight hundred and ";
                break;
            case 9:
                hundreds = "Nine hundred and ";
                break;
            default:
                hundreds = " ";
        }
        switch (singles) {
            case 0:
                singles = "Zero";
                break;
            case 1:
                singles = "One";
                break;
            case 2:
                singles = "Two";
                break;
            case 3:
                singles = "Three";
                break;
            case 4:
                singles = "Four";
                break;
            case 5:
                singles = "Five";
                break;
            case 6:
                singles = "Six";
                break;
            case 7:
                singles = "Seven";
                break;
            case 8:
                singles = "Eight";
                break;
            case 9:
                singles = "Nine";
                break;
            default:
                singles = " ";
        }
        switch (decades) {
            case 1:
                decades = "Ten";
                break;
            case 2:
                decades = "Twenty";
                break;
            case 3:
                decades = "Thrirty";
                break;
            case 4:
                decades = "Fourty";
                break;
            case 5:
                decades = "Fifty";
                break;
            case 6:
                decades = "Sixty";
                break;
            case 7:
                decades = "Seventy";
                break;
            case 8:
                decades = "Eightty";
                break;
            case 9:
                decades = "Ninety";
                break;
            default:
                decades = " ";
        }
        if (number >= 0 && number < 10) {
            result = text + singles;
        } else if (number >= 10 && number < 20) {
            result = text + specials;
        } else if (number >= 20 && number < 100) {
            result = text + decades + " " + singles;
        } else if (number >= 100 && number <= 999) {
            if ((specialsAsNumber) > 9 && (specialsAsNumber) <= 19) {
                result = text + hundreds + specials;
            } else if (decades === 0) {
                result = text + hundreds + " " + specials;
            } else {
                result = text + hundreds + decades + " " + singles;
            }
        }
    }
    console.log(result);
}
console.log(numberAsWord(6));
console.log(numberAsWord(18));
console.log(numberAsWord(26));
console.log(numberAsWord(106));
console.log(numberAsWord(116));
console.log(numberAsWord(126));
console.log(numberAsWord(166));
console.log(numberAsWord(999));
console.log(numberAsWord(1664));
