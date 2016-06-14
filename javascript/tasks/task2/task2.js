// 1. Odd or Even

function printOddOrEven(OddOrEven){
	if(OddOrEven%2 === 0)
	{
		console.log("The number is even!");
	}
	else if(OddOrEven%2 === 1)
	{
		console.log("The number is odd!");
	}
}
printOddOrEven(1);
printOddOrEven(6);




// 2. Divisible by 7 and 5

function divisible7and5(number){
	if((number % 7 === 0) & (number % 5 === 0))
	{
		console.log(true);
	}
	else
	{
		console.log(false);
	}
}
divisible7and5(35);
divisible7and5(37);





// 3. Rectangle area

function rectrangleArea(widht, height){
	var area = widht * height;
	console.log(area);
}
rectrangleArea(6, 8);
rectrangleArea(4, 3);





// 4. Third digit 7

function isThirdDigit7(thirdDigit){
	if((thirdDigit = Math.floor(thirdDigit / 100) % 10) === 7) // Math.floot zakruglqva chisloto po sledniq nachin: 705.11 -> 705
	{
		console.log(true);
	}
	else
	{
		console.log(false);	
	}

}
isThirdDigit7(764.12);
isThirdDigit7(614.08);







// 5. Third bit

function thirdBit(bitnumber){
console.log((bitnumber >> 3) &1);
}
thirdBit(15);
thirdBit(1);
thirdBit(8);
thirdBit(5);





// 6. Point in Circle

function isPointinCircle(x, y, r){
	if(Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2)){
		console.log(true);
	}
	else
	{
		console.log(false);
	}
}
isPointinCircle(0, 1, 5);
isPointinCircle(-4, 5, 5);
isPointinCircle(0, 5, 5);





// 7. Is prime

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
console.log(isPrime(37));
console.log(isPrime(7));
console.log(isPrime(4));	//false 
console.log(isPrime(2));






// 8. Trapezoid area

function trapezoidArea(a, b, h){
	var area = (((a + b) / 2) * h);
	console.log(area);
}
trapezoidArea(5, 7, 12);
trapezoidArea(2, 1, 33);
trapezoidArea(4, 6, 7);