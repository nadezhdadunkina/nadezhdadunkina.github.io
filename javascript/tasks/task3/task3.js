// 1. Exchange if greater
// 1-vi nachin

function greaterNumber(a, b){
	var result;
	if(b>a)
	{
		result = a;
		a = b;
		b = result;
		console.log(a, b);
	}
	else
	{
		console.log(a, b);
	}
}
greaterNumber(5, 6);
greaterNumber(7, 6);


// 2-ri nachin
// Tuk ukazvam da se vuvejdat razlichni chisla

function greater(c, d){
	if((c>d) || (d>c))
	{
	console.log(Math.max(c, d) + "\t" + Math.min(c,d));
	}
	else if((c=d) ||(d=c))
	{
		console.log("The numbers are equal. Enter different numbers.");
	}
}
greater(7, 6);
greater(1, 6);
greater(6, 6);