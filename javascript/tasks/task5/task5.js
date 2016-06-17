 // 1. Increase array members

 var len,
     arr = new Array(20);

 for (var i = 0, len = arr.length; i < len; i++) {
     arr[i] = i * 5;
     console.log(arr[i]);
 }



 // 2. Lexicographically comparison

 var firstArr = ["a", "b", "c", "d", "e", "f"];
 var secondArr = ["a", "d", "g", "h", "t", "y"];
 var string1 = firstArr.join(",");
 var string2 = secondArr.join(",");
 if (string1 > string2) {
     console.log("string1 > string2");
 } else if (string1 < string2) {
     console.log("string1 < string2");
 } else if (string1 == string2) {
     console.log("string1 = string2");
 }





 // 3. Maximal sequence
// variant 1
 var arr = [3, 3, 3, 3, 2, 2, 2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 1, 1, 3],
     result,
     currentLength = 1,
     maxLength = 1,
     currentNumber = arr[0];


 for (var i = 0, len = arr.length; i < len; i++) {
     if (arr[i] === currentNumber) {
         currentLength++;
         currentNumber = arr[i];
         if (currentLength > maxLength) {
             maxLength = currentLength;
             result = currentNumber;
         }
     } else {
         currentLength = 1;
         currentNumber = arr[i];
     }
 }
 var arr1 = [];
 for (var i = 0; i < maxLength; i++) {
     arr1.push(result);
 }

 console.log(arr1.join(","));






// variant 2

var arr = [4, 1, 1, 4, 4, 4, 4, 2, 3],
     currentNumber = 1,
     currentLength = 0,
     frequentNumber = arr[0];


 for (var i = 0, len = arr.length; i < len - 1; i++) {
     if (arr[i] == arr[i + 1]) {
         currentNumber++;
         frequentNumber = arr[i];
     } else {
         currentNumber = 0;

     }
     if (currentLength <= currentNumber) {
         currentLength = currentNumber;
         frequentNumber = arr[i];
     }
 }
 var arrNew = [];
 for(var i=currentLength; i>=0; i--){
 	arrNew.push(frequentNumber);
 }
 console.log(arrNew.join("|") + " (" + (currentLength+1) + " times)");










 // 4. Maximal increasing sequence

 var arr = [1, 2, 3, 4, 2, 2, 4, 5, 9, 6, 1, 2, 3, 4, 5, 6],
     result = 0,
     currentLength = 1,
     maxLength = 1,
     currentNumber = arr[0];


 for (var i = 0, len = arr.length; i < len; i++) {
     if (arr[i] > currentNumber) {
         currentLength++;
         currentNumber = arr[i];
         if (currentLength > maxLength) {
             maxLength = currentLength;
             result = i - (currentLength - 1);
         }
     } else {
         currentLength = 1;
         currentNumber = arr[i];
     }
 }
 var arr1 = [];
 for (i = 0; i < maxLength; i++) {
     arr1.push(arr[i + result])
 }

 console.log(arr1.join(","));








 // 5. Selection sort

 var arr = [3, 4, 6, 1, 2],
     minIndex,
     min,
     currentElement;



 for (var sortIndex = 0, len = arr.length; sortIndex < len; sortIndex++) {
     currentElement = arr[sortIndex];
     var i = sortIndex;
     min = currentElement;
     minIndex = sortIndex;


     do {
         if (min > currentElement) {
             min = currentElement;
             minIndex = i;
         }
         i++;
         currentElement = arr[i];
     }
     while (i < arr.length)
     var swap = arr[sortIndex];
     arr[sortIndex] = arr[minIndex];
     arr[minIndex] = swap;
 }
 console.log(arr);







 // 6. Most frequent number

   var arr = [4, 1, 1, 4, 2, 3, 6, 6, 6, 6, 6, 6, 6, 4, 7, 4, 1, 2, 4, 9, 3],
       currentNumber = 1,
       currentLength = 0,
       frequentNumber
   for (var i = 0, len = arr.length; i < len; i++) {
   	for(var j = i, len = arr.length; j < len; j++){
   		if(arr[i] == arr[j]){
   			currentNumber++;}
   		if(currentLength < currentNumber){
   				currentLength = currentNumber;
   				frequentNumber = arr[i];
   			}}
  currentNumber = 0;
   }

  console.log(frequentNumber + " (" + currentLength + " times)");




  // 7. Binary search

var arr = [1, 3, 5, 6, 7, 8, 11, 16, 18, 20];
var n = 18,
    start = 0,
    stop = arr.length-1,
    middle = parseInt((start+stop)/2);

    while(start <= stop && arr[middle] !==n){
        if(n>arr[middle]){
            start = middle+1;
        }
        else{
            stop = middle-1;
        }
        middle = parseInt((start + stop)/2);
    }


console.log("Index is: " + middle);